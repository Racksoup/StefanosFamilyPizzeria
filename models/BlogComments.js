const mongoose = require('mongoose');

const BlogCommentsSchema = new mongoose.Schema({
  blog_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = Blogs = mongoose.model('blogcomments', BlogCommentsSchema);
