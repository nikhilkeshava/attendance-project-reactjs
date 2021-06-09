const mongoose = require("mongoose");

const attendancePresentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const AttendencePresent = mongoose.model(
  "PresentData",
  attendancePresentSchema
);

module.exports = AttendencePresent;
