const express = require("express");
const router = express.Router();
const { Users, Ketua } = require("../models");
const bcrypt = require("bcrypt");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");

// create new user
router.post("/", async (req, res) => {
  const {
    namaDepan,
    namaBelakang,
    phone,
    alamat,
    jenisKelamin,
    role,
    password,
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  if (role == "ketua") {
    const result = await Ketua.create({
      namaDepan: namaDepan,
      namaBelakang: namaBelakang,
      phone: phone,
      alamat: alamat,
      jenisKelamin: jenisKelamin,
      role: role,
      password: hashedPassword,
    });

    res.status(200).json({ result: result });
  } else {
    const result = await Users.create({
      namaDepan: namaDepan,
      namaBelakang: namaBelakang,
      phone: phone,
      alamat: alamat,
      jenisKelamin: jenisKelamin,
      role: role,
      password: hashedPassword,
    });
    res.status(200).json({ result: result });
  }
});

// login
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  try {
    // check if user exist
    const user = await Users.findOne({ where: { phone: phone } });
    if (user) {
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Password salah" });

        const accessToken = sign({ result: user }, "importantsecret");

        res.json({ result: user, accessToken });
      });
    }

    const ketua = await Ketua.findOne({ where: { phone: phone } });
    if (ketua) {
      bcrypt.compare(password, ketua.password).then((match) => {
        if (!match) res.json({ error: "Password salah" });

        const accessToken = sign({ result: ketua }, "importantsecret");

        res.json({ result: ketua, accessToken });
      });
    }
  } catch (error) {
    res.json(error);
  }
});

// get data warga based on community_id
router.get("/data-warga/:id", async (req, res) => {
  const community_id = req.params.id;
  console.log(community_id);
  try {
    const listOfWarga = await Users.findAll({
      where: {
        community_id: community_id,
      },
    });

    res.json({ data: listOfWarga });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
