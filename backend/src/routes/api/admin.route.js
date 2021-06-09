const express = require("express");
const router = new express.Router();
const adminController = require("../../controller/admin.controller");
const adminauth = require("../../middleware/adminauth");
// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
router.post("/create", adminController.createAdmin);
router.post("/login", adminController.login);
router.post("/logout", adminauth, adminController.logout);

// router.get("/get", adminauth, adminController.getAdmin);
// router.patch("/:id", adminController.addAdmin);

module.exports = router;
