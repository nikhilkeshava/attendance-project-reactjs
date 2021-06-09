const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
