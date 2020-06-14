const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

connectDB();

app.use(express.json({ extended: false }));
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));

app.use("/postBlog", require("./routes/BlogInput.js"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`running blog input on port ${PORT}`);
});
