const mongoose = require("mongoose");

const PresentService = require("../services/AttendanceP.service");
const Present = require("../models/attendancePresent");

exports.createPresentdata = async (req, res) => {
  try {
    let response = await PresentService.createPresent(req.body);
    if (response) {
      res.status(response.code).json(response);
    } else res.status(400);
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};
exports.getpdata = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await PresentService.getpdata(skip, limit);
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
