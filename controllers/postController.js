const Post = require("../models/post");

exports.getHomePage = async function (req, res) {
  try {
    const blogPosts = await Post.find();
    res.render("home", {
      homeStartContent: "",
      blogPosts: blogPosts,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

exports.getComposePage = function (req, res) {
  res.render("compose");
};

exports.createPost = async function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  try {
    await post.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

exports.getPostPage = async function (req, res) {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      res.status(404).send("Post not found");
      return;
    }

    res.render("post", {
      singlePostTitle: post.title,
      singlePostBody: post.content,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

exports.getAboutPage = function (req, res) {
  res.render("about", {
    aboutContent: "",
  });
};

exports.getContactPage = function (req, res) {
  res.render("contact", {
    contactContent: "",
  });
};

exports.deletePost = async function (req, res) {
  const postTitle = req.body.deletePost;

  try {
    const deletedPost = await Post.findOneAndDelete({ title: postTitle });

    if (!deletedPost) {
      res.status(404).send("Post not found");
      return;
    }

    res.redirect("/");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
