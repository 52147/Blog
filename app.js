//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "";
const aboutContent = "";
const contactContent = "";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// connect with mongoose MongoDB
mongoose.connect("mongodb+srv://123:123@cluster0.jnxzx3s.mongodb.net/blogDB", {
  useNewUrlParser: true
});
// mongoose.connect("mongodb://localhost:27017/blogDB", {
//   useNewUrlParser: true
// });

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function (req, res) {
  Post.find({}, function (err, result) {
    if (!err) {
      if (result) {
        res.render("home", {
          homeStartContent: homeStartingContent,
          blogPosts: result
        });
      } else {
        res.render("home", {
          homeStartContent: homeStartingContent
        });
      }
    }
  });

});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody
  }; //retrieve post content
  const postToDB = new Post({
    title: post.title,
    content: post.body
  });
  postToDB.save().then(res.redirect("/")); //go back to the home page)
});

app.get("/posts/:postID", function (req, res) {
  const postId = req.params.postID;

  Post.findById(postId, function (err, result) {
    res.render("post", {
      singlePostTitle: result.title,
      singlePostBody: result.content
    });
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    aboutContent: aboutContent
  });
});

app.get("/contact", function (req, res) {
  res.render("contact", {
    contactContent: contactContent
  });
});

app.post("/delete", function (req, res) {
  const deletePost = req.body.deletePost;
  Post.findOneAndRemove({
    title: deletePost
  }).then(res.redirect("/"));
});




// list on local host 3000(website) for connection
app.listen(process.env.PORT || 3000, function () {

  console.log("Server started on port 3000");

});