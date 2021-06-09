const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  date: {
    type: String,
    // unique: true,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  // status: {
  //   type: String,
  //   required: true,
  // },
});

const Attendence = mongoose.model("Attendence", attendenceSchema);

module.exports = Attendence;
