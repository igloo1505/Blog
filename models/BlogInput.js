const mongoose = require("mongoose");
const moment = require("moment");
moment.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
  },
});

// Don't forget, months in moment are an array so all of these are off by one
let daysInMonth = {
  "03": 30,
  "04": 31,
  "05": 30,
  "06": 31,
  "07": 31,
  "08": 30,
  "09": 31,
  "10": 30,
  "11": 31,
};
const getDaysReturned = (data) => {
  let daysTotal = 0;
  let currentMonth = moment().month();
  let currentDay = moment().date();
  let startDay = data.split("-")[1];
  let startMonth = data.split("-")[0] - 1;
  startMonth = startMonth.toString();
  if (parseInt(startMonth) < 10) {
    startMonth = "0" + startMonth;
  }
  let daysLeft;
  for (var i = parseInt(startMonth); i <= currentMonth; i++) {
    if (currentMonth == parseInt(startMonth)) {
      daysLeft = currentDay - startDay;
      daysTotal = daysTotal + daysLeft;
    } else {
      daysLeft = daysInMonth[startMonth];
      daysTotal = daysTotal + daysLeft;
      startMonth = parseInt(startMonth) + 1;
    }
  }
  return daysTotal;
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
  dateFromNumber: {
    type: Number,
    default: Date.now(),
  },
  dayCount: {
    type: Number,
    default: () => getDaysReturned("06-14-2020"),
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
