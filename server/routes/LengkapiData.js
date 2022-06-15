const express = require("express");
const router = express.Router();
const { Community, Users, Ketua } = require("../models");

// API untuk mendapatkan komen setiap post
// perlu post id sebagai params
// router.get("/:postId", async (req, res) => {
//   const postId = req.params.postId;

//   try {
//     // find post by postId
//     const comments = await Comments.findAll({ where: { PostId: postId } });

//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(400).json({ message: "Post not found" });
//   }
// });

// API untuk buat community baru

router.post("/", async (req, res) => {
  const communities = req.body;

  console.log(communities);

  let newCommunities = await Community.create(communities);

  let result = await Ketua.update(
    { community_id: communities.community_id },
    { where: { id: communities.KetuaId } }
  );

  console.log(result);

  res.status(200).json(newCommunities);
  try {
  } catch (error) {}
});

router.post("/warga", async (req, res) => {
  // add community id to warga models
  const { community_id, id } = req.body;
  try {
    let result = await Users.update(
      { community_id: community_id },
      { where: { id: id } }
    );
    res.json({ message: "Berhasil update community_id" });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
