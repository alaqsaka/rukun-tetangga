const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const { Likes } = require("../models");

router.post("/", validateToken, async (req, res) => {
  const { PostId } = req.body;
  console.log(PostId);
  console.log(req.user);
  const UserId = req.user.result.id;

  const found = await Likes.findOne({
    where: { Postid: PostId, UserId: UserId },
  });

  if (!found) {
    // like the post
    await Likes.create({ PostId: PostId, UserId: UserId });
    res.status(200).json({ liked: true });
  } else {
    // unlike the post
    await Likes.destroy({ where: { PostId: PostId, UserId: UserId } });
    res.status(200).json({ liked: false });
  }
});

module.exports = router;
