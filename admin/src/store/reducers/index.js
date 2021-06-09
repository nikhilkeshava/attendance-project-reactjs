import { combineReducers } from "redux";
import loader from "../Loader/LoaderReducer";
import { UserReducer } from "../User/UserReducer";
import { HolidayReducer } from "../Holiday/HolidayReducer";
import { NotificationReducer } from "../Notification/NotificationReducer";
import { BlogReducer } from "../Blog/Blogreducers";
import { AttendanceReducer } from "../Attendance/AttendanceReducer";
export default combineReducers({
  loader,
  UserReducer,
  HolidayReducer,
  NotificationReducer,
  BlogReducer,
  AttendanceReducer,
});
