const express = require("express");
// const auth = require("../../middleware/auth");
const router = new express.Router();
const Blog = require("../../controller/Blog.controller");

router.get("/get", Blog.getblog);
router.patch("/:id", Blog.updateBlog);
router.delete("/:id", Blog.deleteBlog);
router.post("/create", Blog.createBlog);
router.patch("/:id", Blog.likeBLog);

module.exports = router;
