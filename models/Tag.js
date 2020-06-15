const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
  TagArray: {
    type: Array,
  },
});

module.exports = mongoose.model("TagArray", TagSchema);
