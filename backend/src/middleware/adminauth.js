const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");

const adminauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // console.log("token",token)
    const decoded = jwt.verify(token, "thisismynewcourse");
    // console.log("decoded",decoded)
    const admin = await Admin.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    // console.log("useerrr",decoded,user)

    if (!admin) {
      throw new Error();
    }

    req.token = token;
    req.admin = admin;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please admin authenticate." });
  }
};

module.exports = adminauth;
