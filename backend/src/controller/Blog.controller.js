const BlogService = require("../services/blog.services");
const Blog = require("../models/Blog.model");
const mongoose = require("mongoose");

exports.createBlog = async (req, res) => {
  try {
    let response = await BlogService.createBlog(req.body);
    if (response) {
      res.status(response.code).json(response);
    } else res.status(400);
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};
// exports.getblog=async (req, res) => {
//     try {
//         const blog = await Blog.find();

//         res.status(200).json(blog);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
//   }
//   }
exports.getblog = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await BlogService.getBlog(skip, limit);
    if (response) {
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { Title, Content, Status, CreateTime } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Notification with id: ${id}`);

  const updatedBlog = { Title, Content, Status, CreateTime };

  await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });

  res.json(updatedBlog);
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Notifications with id: ${id}`);

  await Blog.findByIdAndRemove(id);

  res.json({ message: "Notification deleted successfully." });
};

exports.likeBLog = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const blog = await Blog.findById(id);

  const index = blog.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    blog.likes.push(req.userId);
  } else {
    blog.likes = blog.likes.filter((id) => id !== String(req.userId));
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
  res.status(200).json(updatedBlog);
};
