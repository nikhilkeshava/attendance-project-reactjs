const express = require("express");
const router = new express.Router();
const NotificationController = require("../../controller/Notification.controller");
const Notification = require("../../models/Notificaion.model");

router.post("/create", NotificationController.createNotification);

router.get("/get", NotificationController.getNotification);
router.patch("/:id", NotificationController.updateNotification);
router.delete("/:id", NotificationController.deleteNotification);
router.get("/countnoti", (req, res) => {
  Notification.countDocuments({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
