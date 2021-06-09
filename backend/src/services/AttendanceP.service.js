const PresentData = require("../models/attendancePresent");

exports.createPresent = async (pdata) => {
  const Present = new PresentData(pdata);
  let promise = new Promise(async (resolve, reject) => {
    try {
      await Present.save();
      resolve({ code: 200, Present });
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.getpdata = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const pdata = await PresentData.find().skip(skip).limit(limit);
      resolve({ code: 200, pdata });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};
