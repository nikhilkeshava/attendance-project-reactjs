const userRoutes = require("./user.route.js");
const holidayRoutes = require("./holiday.route.js");
const NotificationRoutes = require("./Notification.route.js");
const BlogRoutes = require("./Blog.route.js");
const presentData = require("./PresentData.router.js");
const emailRoutes = require("./contact.route.js");
const attendanceRoutes = require("./attendance.route.js");
const adminRoutes = require("./admin.route.js");

module.exports = (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/holiday", holidayRoutes);
  app.use("/api/email", emailRoutes);
  app.use("/api/notification", NotificationRoutes);
  app.use("/api/attendence", attendanceRoutes);
  app.use("/api", presentData);
  app.use("/api/blog", BlogRoutes);
  app.use("/api/admin", adminRoutes);

  // app.use("/api/Notifiction",NotificationRoutes)
};

// module.exports = (app) => {
//   app.use("/api/user", userRoutes);
//   app.use("/api/holiday", holidayRoutes);
//   app.use("/api/email", emailRoutes);
//   app.use("/api/notification", NotificationRoutes);
//   app.use("/api/attendence", attendanceRoutes);
//   app.use("/api", presentData);
//   app.use("/api/blog", BlogRoutes);
//   app.use("/api/admin", adminRoutes);
// };
