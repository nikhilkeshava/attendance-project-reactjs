const express = require("express");
const router = new express.Router();

const attendenceController = require("../../controller/attendance.controller");

router.post("/create", attendenceController.createAbsent);
router.get("/get", attendenceController.getPermission);
// router.patch("/:id", attendenceController.updateAttendence);

module.exports = router;
