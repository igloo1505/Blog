const express = require("express");
const router = express.Router();
const Post = require("../models/BlogInput");
const TagArray = require("../models/Tag");

router.post("/", async (req, res) => {
  console.log("request...", req.body);
  let { title, subjectMatterArray, content } = req.body;
  try {
    let newPost = new Post({
      subjectMatterArray,
      title,
      content,
    });
    let array = await TagArray.findById("5ee7fa6c0863712362baf5fe");
    if (!array) {
      array = [];
    } else {
      array = array.TagArray;
    }
    console.log("tag array at line 20", array);
    for (var i = 0; i < subjectMatterArray.length; i++) {
      if (array.indexOf(subjectMatterArray[i]) === -1) {
        array.push(subjectMatterArray[i]);
      }
    }
    let toBeSavedArray = new TagArray(array);
    let savedArray = await TagArray.findByIdAndUpdate(
      { _id: "5ee7fa6c0863712362baf5fe" },
      { TagArray: array }
    );
    if (!savedArray) {
      let newArray = await toBeSavedArray.save();
      console.log(newArray);
    }
    console.log(savedArray);
    let savedPost = await newPost.save();
    res.json({ savedPost, array });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error posting blog content");
  }
});

module.exports = router;
