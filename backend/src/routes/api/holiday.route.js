const express = require("express");
const auth = require("../../middleware/auth");
const adminauth = require("../../middleware/adminauth");
const router = new express.Router();
const holidayController = require("../../controller/holiday.controller");

router.post("/create", holidayController.createHoliday);
router.get("/get", holidayController.getHoliday);

module.exports = router;
