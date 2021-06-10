import React from "react";

export const Dashboard = React.lazy(() =>
  import("../containers/Dashboard/dashboard")
);
export const Login = React.lazy(() => import("../containers/Login/Login"));
export const Reg = React.lazy(() => import("../containers/Login/Register"));
export const Attendance = React.lazy(() =>
  import("../containers/Attendance/Attendance")
);
export const UserDataAdd = React.lazy(() =>
  import("../containers/UserDataAdd/AdduserData")
);
export const Notification = React.lazy(() =>
  import("../containers/Notification/Notification")
);
export const Holiday = React.lazy(() =>
  import("../containers/Holiday/Holiday")
);
export const Blog = React.lazy(() => import("../containers/Blog/Blog"));
export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
