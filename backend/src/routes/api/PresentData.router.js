const express = require("express");
const router = new express.Router();
const presentData = require("./PresentData.router.js");
const Present = require("../../models/attendancePresent");
const auth = require("../../middleware/auth");

const presentController = require("../../controller/PresentData.controller");

router.post("/create", auth, presentController.createPresentdata);
router.get("/get", auth, presentController.getpdata);

router.get("/countpresent", (req, res) => {
  Present.countDocuments({status: "Present"}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/counthalfday", (req, res) => {
  Present.countDocuments({status: "HalfDay"}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
router.get("/totalpresent", (req, res) => {
  Present.countDocuments({ }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
router.get("/demo", (req, res) => {
  Present.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
