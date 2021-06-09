const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    NotificationName: {
      type: String,
      required: true,
      unique: true,
    },
    NotificationBody: {
      type: String,
      unique: true,
      required: true,
    },
    CreatedAt: {
        type:Date,
        default:Date.now
    },
    Link:{
        type:String,
    }
  },
 
);

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;
