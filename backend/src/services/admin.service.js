const Admin = require("../models/admin.model");

exports.createAdmin = async (adminData) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      let admin = await Admin.findOne({
        email: adminData.email,
      });
      if (admin) {
        resolve({ code: 403, message: "Admin Already Exists" });
      } else {
        admin = await Admin(adminData).save();
        const token = await admin.generateAuthToken();
        resolve({ code: 200, data: admin, token: token });
      }
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.login = async (adminData) => {
  // console.log("adminData",adminData)
  let promise = new Promise(async (resolve, reject) => {
    try {
      const admin = await Admin.findByCredentials(
        adminData.email,
        adminData.password
      );
      const token = await admin.generateAuthToken();
      // console.log("token",token,admin)
      resolve({ code: 200, data: admin, token: token });
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.getAdmins = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const admins = await Admin.find({}).skip(skip).limit(limit);
      resolve({ code: 200, admins });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};
