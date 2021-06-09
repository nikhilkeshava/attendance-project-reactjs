const mongoose = require("mongoose");
const { update } = require("../models/user.model");
const User = require("../models/user.model");

const userService = require("../services/user.service");

exports.createUser = async (req, res) => {
  try {
    let response = await userService.createUser(req.body);
    if (response) {
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) throw new Error("Email is Required");
    if (!password) throw new Error("Password is Required");

    let response = await userService.login(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await userService.getUsers(skip, limit);
    if (response) {
      // console.log("res",response,response.code)
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

exports.addUsers = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    role,
    age,
    salary,
    skills,
    githubLink,
    experience,
    bio,
    languageknown,
    gender,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedUser = {
    name,

    role,
    age,
    salary,
    skills,
    githubLink,
    experience,
    bio,
    languageknown,
    gender,

    _id: id,
  };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
};
