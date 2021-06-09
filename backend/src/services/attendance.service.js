const Attendence = require("../models/attendance.model");

exports.createAbsent = async (Abdata) => {
  const attendence = new Attendence(Abdata);
  let promise = new Promise(async (resolve, reject) => {
    try {
      if (attendence) {
        await attendence.save();
        resolve({ code: 200, attendence });
      }
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};
exports.getPermission = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const attendence = await Attendence.find().skip(skip).limit(limit);
      resolve({ code: 200, attendence });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};
