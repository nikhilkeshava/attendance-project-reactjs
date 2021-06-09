const Blog = require("../models/Blog.model");
const mongoose = require("mongoose");

exports.createBlog = async (Hdata) => {
  const blog = new Blog(Hdata);

  let promise = new Promise(async (resolve, reject) => {
    try {
      if (blog) {
        await blog.save();
        resolve({ code: 200, blog });
      }
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.getBlog = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const blog = await Blog.find().skip(skip).limit(limit);
      resolve({ code: 200, blog });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};
