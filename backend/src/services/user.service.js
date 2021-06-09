const User = require("../models/user.model");

exports.createUser = async (userData) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({
        email: userData.email,
      });
      if (user) {
        resolve({ code: 403, message: "User Already Exists" });
      } else {
        user = await User(userData).save();
        const token = await user.generateAuthToken();
        resolve({ code: 200, data: user, token: token });
      }
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.login = async (userData) => {
  // console.log("userData",userData)
  let promise = new Promise(async (resolve, reject) => {
    try {
      const user = await User.findByCredentials(
        userData.email,
        userData.password
      );
      const token = await user.generateAuthToken();
      // console.log("token",token,user)
      resolve({ code: 200, data: user, token: token });
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.getUsers = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const users = await User.find({}).skip(skip).limit(limit);
      resolve({ code: 200, users });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};
