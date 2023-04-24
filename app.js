const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const { Post } = require('./post');
const { PostRepository } = require('./postRepository');

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

// Initialize post repository
const postRepository = new PostRepository();

// Initialize post service with post repository dependency injected
const postService = new Post(postRepository);

app.get("/", async function (req, res) {
  const blogPosts = await postService.getAllPosts();
  res.render("home", {
    homeStartContent: homeStartingContent,
    blogPosts: blogPosts
  });
});

app.get("/compose", function
(req, res) {
  res.render("compose");
  });
  
  app.post("/compose", async function (req, res) {
  const post = {
  title: req.body.postTitle,
  body: req.body.postBody
  }; //retrieve post content
  
  const postData = {
  title: post.title,
  content: post.body
  };
  
  const newPost = await postService.createPost(postData);
  
  res.redirect("/");
  });
  
  app.get("/posts/:postId", async function (req, res) {
  const postId = req.params.postId;
  
  const post = await postService.getPostById(postId);
  
  if (!post) {
  res.status(404).send('Post not found!');
  }
  
  res.render("post", {
  singlePostTitle: post.title,
  singlePostBody: post.content
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
  
  app.post("/delete", async function (req, res) {
  const postId = req.body.deletePost;
  await postService.deletePost(postId);
  res.redirect("/");
  });
  
  // list on local host 3000(website) for connection
  app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
  });