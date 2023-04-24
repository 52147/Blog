const mongoose = require("mongoose");

class PostRepository {
  constructor() {
    this.PostModel = mongoose.model("Post", {
      title: String,
      content: String,
    });
  }

  async getAll() {
    return await this.PostModel.find();
  }

  async create(postData) {
    const post = new this.PostModel(postData);
    return await post.save();
  }

  async getById(postId) {
    return await this.PostModel.findById(postId);
  }

  async delete(postId) {
    return await this.PostModel.findByIdAndDelete(postId);
  }
  async deleteByTitle(postTitle) {
    return await this.PostModel.findOneAndDelete({ title: postTitle });
  }
}


module.exports = {
  PostRepository,
};
