const NotificationService = require("../services/Notification.service");
const Notification = require("../models/Notificaion.model");
const mongoose = require("mongoose");

exports.createNotification = async (req, res) => {
  try {
    let response = await NotificationService.createNotification(req.body);
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

// exports.getNotification=async (req, res) => {
//     try {
//         const NotificationMessages = await Notification.find();

//         res.status(200).json(NotificationMessages);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
//   }
exports.getNotification = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await NotificationService.getNotification(skip, limit);
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

exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { NotificationName, NotificationBody, CreatedAt, Link } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Notification with id: ${id}`);

  const updatedNotifiction = {
    NotificationName,
    NotificationBody,
    CreatedAt,
    Link,
  };

  await Notification.findByIdAndUpdate(id, updatedNotifiction, { new: true });

  res.json(updatedNotifiction);
};

exports.deleteNotification = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Notifications with id: ${id}`);

  await Notification.findByIdAndRemove(id);

  res.json({ message: "Notification deleted successfully." });
};
