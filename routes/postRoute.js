const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.getHomePage);
router.get("/compose", postController.getComposePage);
router.post("/compose", postController.createPost);
router.get("/posts/:postId", postController.getPostPage);
router.get("/about", postController.getAboutPage);
router.get("/contact", postController.getContactPage);
router.post("/delete", postController.deletePost);

module.exports = router;
