const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

// API untuk mendapatkan komen setiap post
// perlu post id sebagai params
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    // find post by postId
    const comments = await Comments.findAll({ where: { PostId: postId } });

    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: "Post not found" });
  }
});

// API untuk membuat comment baru

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  console.log(req.user);
  const namaDepan = req.user.result.namaDepan;
  const namaBelakang = req.user.result.namaBelakang;
  comment.namaDepan = namaDepan;
  comment.namaBelakang = namaBelakang;
  await Comments.create(comment);

  res.status(200).json(comment);
  try {
  } catch (error) {}
});

module.exports = router;
