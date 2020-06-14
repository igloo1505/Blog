const express = require("express");
const router = express.Router();
const Post = require("../models/BlogInput");

router.post("/", async (req, res) => {
  console.log("request...", req.body);
  let { subjectMatterArray, title, content } = req.body;

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

module.exports = router;
