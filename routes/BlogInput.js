const express = require("express");
const router = express.Router();
const Post = require("../models/BlogInput");

router.post("/", async (req, res) => {
  console.log("request...", req.body);
  let { title, subjectMatterArray, content } = req.body;
  try {
    let newPost = new Post({
      subjectMatterArray,
      title,
      content,
    });
    let savedPost = await newPost.save();
    res.json({ savedPost });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error posting blog content");
  }
});

router.get("/all", async (req, res) => {
  let AllPosts = await Post.find();
  res.json({ AllPosts });
});

module.exports = router;
