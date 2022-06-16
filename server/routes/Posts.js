const express = require("express");
const router = express.Router();
const { Posts, Likes } = require("../models");

router.get("/", async (req, res) => {
  // join posts table and likes tables
  // supaya bisa nampilin jumlah like
  // including other models
  const listOfPosts = await Posts.findAll({ include: [Likes] });

  res.json(listOfPosts);
});

router.get("/:community_id", async (req, res) => {
  const community_id = req.params.community_id;

  console.log(community_id);

  const post = await Posts.findAll({
    where: { community_id: community_id },
  });

  console.log(post);
  res.status(200).json(post);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // find post by primary ke (id)
    const post = await Posts.findByPk(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: "Post not found" });
  }
});

// create new post
router.post("/", async (req, res) => {
  const post = req.body;

  console.log(post);

  let newPost = await Posts.create(post);

  res.json(newPost);
});

// delete a post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const post = await Posts.findOne({
    where: { id: id },
  });

  if (post) {
    await post.destroy(); // delete the row
  }

  res.json({ message: "Kegiatan berhasil dihapus" });
});
module.exports = router;
