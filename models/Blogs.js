const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
  image_filename: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
  },
});

module.exports = Blogs = mongoose.model('blogs', BlogsSchema);
