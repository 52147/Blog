const mongoose = require('mongoose');
const { Post } = require('./post');

class PostRepository {
  constructor() {
    this.PostModel = mongoose.model('Post', {
      title: String,
      content: String
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
}

module.exports = {
  PostRepository
};
