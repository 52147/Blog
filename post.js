const mongoose = require('mongoose');

class Post {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async getAllPosts() {
    return await this.postRepository.getAll();
  }

  async createPost(postData) {
    return await this.postRepository.create(postData);
  }

  async getPostById(postId) {
    return await this.postRepository.getById(postId);
  }

  async deletePost(postId) {
    return await this.postRepository.delete(postId);
  }
}

module.exports = {
  Post
};
