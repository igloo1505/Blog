const express = require("express");
const router = express.Router();
const Post = require("../models/BlogInput");
const _ = require("lodash");

router.get("/all", async (req, res) => {
  let AllPosts = await Post.find();
  res.json(AllPosts);
});
router.get("/byDate", async (req, res) => {
  let ByDate = await Post.find();
  ByDate = _.sortBy(ByDate, [(post) => post.dateFromNumber]);
  res.json(ByDate);
});

module.exports = router;
