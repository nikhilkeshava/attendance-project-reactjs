// const mongoose = require("mongoose");

const AttendenceService = require("../services/attendance.service");
// const Attendence = require("../models/attendance.model");

exports.createAbsent = async (req, res) => {
  try {
    let response = await AttendenceService.createAbsent(req.body);
    if (response) {
      res.status(response.code).json(response);
    } else res.status(400);
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.getPermission = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await AttendenceService.getPermission(skip, limit);
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

// exports.updateAttendence = async (req, res) => {
//   const { id } = req.params;
//   const { name, date, subject, message, status } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const updatedPost = { name, date, subject, message, status, _id: id };

//   await Attendence.findByIdAndUpdate(id, updatedPost, { new: true });

//   res.json(updatedPost);
// };
