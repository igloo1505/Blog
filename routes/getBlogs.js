const express = require("express");
const router = express.Router();
const Post = require("../models/BlogInput");
const TagArray = require("../models/Tag");
const _ = require("lodash");

router.get("/all", async (req, res) => {
  let AllPosts = await Post.find();
  let sorted = AllPosts.sort((a, b) => a.dateFromNumber - b.dateFromNumber);
  res.json(sorted);
});
router.get("/byDate", async (req, res) => {
  let ByDate = await Post.find();
  let sorted = ByDate.sort((a, b) => b.dateFromNumber - a.dateFromNumber);
  res.json(sorted);
});
router.get("/ByTag/:tag", async (req, res) => {
  let { tag } = req.params;
  let allPosts = await Post.find();
  let dataHolder = [];
  for (var i = 0; i < allPosts.length; i++) {
    console.log("tag", tag);
    console.log("array for each", allPosts[i].subjectMatterArray);
    if (allPosts[i].subjectMatterArray.indexOf(tag) !== -1) {
      dataHolder.push(allPosts[i]);
    }
  }
  console.log(dataHolder);
  res.json(dataHolder);
});

router.get("/tagArray", async (req, res) => {
  let tagArray = await TagArray.find();

  res.json(tagArray[0].TagArray);
});

module.exports = router;
