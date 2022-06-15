const express = require("express");
const router = express.Router();
const { Posts, Likes, Community } = require("../models");

// router.get("/", async (req, res) => {
//   // join posts table and likes tables
//   // supaya bisa nampilin jumlah like
//   // including other models
//   const listOfPosts = await Posts.findAll({ include: [Likes] });

//   res.json(listOfPosts);
// });

router.get("/:community_id", async (req, res) => {
  const { community_id } = req.params;

  try {
    const community_detail = await Community.findOne({
      where: { community_id: community_id },
    });

    if (community_detail) {
      res.status(200).json({
        message: "Success get Community Detail",
        data: community_detail,
        status: 200,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "No community Id Found",
        data: community_detail,
        status: 404,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
