const mongoose = require("mongoose");
const moment = require("moment");
moment.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
  },
});
const getDaysReturned = (date) => {
  const returnDateFromStart = parseInt(moment(date).fromNow().split(" ")[0]);
  return returnDateFromStart;
};

const PostSchema = mongoose.Schema({
  dataReadable: {
    type: String,
    default: moment(Date.now()).format("MM-DD-YYYY"),
  },
  dateUTC: {
    type: Date,
    default: Date.now(),
  },
  dayCount: {
    type: Number,
    default: () => getDaysReturned("06-10-2020"),
  },
  subjectMatterArray: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
