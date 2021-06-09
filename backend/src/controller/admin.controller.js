const { update } = require("../models/admin.model");

const adminService = require("../services/admin.service");

exports.createAdmin = async (req, res) => {
  try {
    let response = await adminService.createAdmin(req.body);
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

    let response = await adminService.login(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await adminService.getAdmins(skip, limit);
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

exports.logout = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
};
