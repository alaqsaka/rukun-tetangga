import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import KetuaSchema from "../models/ketua.js";
import WargaSchema from "../models/warga.js";

export const signin = async (req, res) => {
  // phone, password
  const { phone, password } = req.body;

  try {
    const existingKetua = await KetuaSchema.findOne({ phone });

    const existingWarga = await WargaSchema.findOne({ phone });

    if (!existingKetua)
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });

    if (!existingWarga)
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });

    if (existingKetua) {
      const isPasswordCorrect = await bcrypt.compare(password, existingKetua);

      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Password salah" });

      const token = jwt.sign(
        {
          phone: existingKetua.phone,
          id: existingKetua._id,
        },
        "test",
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: existingKetua, token });
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, existingWarga);
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Password salah" });

      const token = jwt.sign(
        {
          phone: existingWarga.phone,
          id: existingWarga._id,
        },
        "test",
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingWarga, token });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const {
    namaDepan,
    namaBelakang,
    phone,
    password,
    confirmPassword,
    jenisKelamin,
    role,
    alamat,
  } = req.body;

  try {
    const existingKetua = await KetuaSchema.findOne({ phone });

    const existingWarga = await WargaSchema.findOne({ phone });

    if (existingKetua || existingWarga)
      return res
        .status(404)
        .json({ message: "Pengguna dengan nomor handphone ini sudah ada." });

    if (password != confirmPassword)
      res
        .status(400)
        .json({ message: "Password dan Konfirmasi Password Berbeda" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    if (existingKetua) {
      // ketua
      const result = await KetuaSchema.create({
        namaDepan,
        namaBelakang,
        phone: phone,
        password: hashedPassword,
        role,
        alamat,
      });

      const token = jwt.sign(
        {
          phone: result.phone,
          id: result._id,
        },
        "test",
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: result, token });
    } else {
      // warga
      const result = await WargaSchema.create({
        namaDepan,
        namaBelakang,
        phone: phone,
        password: hashedPassword,
        role,
        alamat,
      });

      const token = jwt.sign(
        {
          phone: result.phone,
          id: result._id,
        },
        "test",
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: result, token });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
