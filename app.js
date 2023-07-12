const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoute");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb+srv://123:123@cluster0.jnxzx3s.mongodb.net/blogDB", {
  useNewUrlParser: true,
});

// Use routes
app.use("/", postRoutes);

// Listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
