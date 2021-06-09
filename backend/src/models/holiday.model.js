const mongoose = require("mongoose");
const validator = require('validator')

const holidaySchema = new mongoose.Schema(
  {
    event: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: String,
      unique: true,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true
  }
);

const Holiday = mongoose.model("Holiday", holidaySchema);

module.exports = Holiday;
