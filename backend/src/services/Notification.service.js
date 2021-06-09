const Notification = require("../models/Notificaion.model");
const mongoose = require("mongoose");

exports.createNotification = async (Hdata) => {
  const notification = new Notification(Hdata);

  let promise = new Promise(async (resolve, reject) => {
    try {
      if (notification) {
        await notification.save();
        resolve({ code: 200, notification });
      }
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.getNotification = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const notification = await Notification.find().skip(skip).limit(limit);
      resolve({ code: 200, notification });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};
