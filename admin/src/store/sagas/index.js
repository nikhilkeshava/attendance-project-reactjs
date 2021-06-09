import { all } from "redux-saga/effects";
import { UserSaga } from "../User/UserSaga";
import { HolidaySaga } from "../Holiday/HolidaySaga";
import { NotificationSaga } from "../Notification/NotificationSaga";
import { BlogSaga } from "../Blog/Blogsagas";
import { AttendanceSaga } from "../Attendance/AttendanceSaga";

export function* watchSagas() {
  //Combine sagas with

  yield all([
    UserSaga(),
    HolidaySaga(),
    NotificationSaga(),
    BlogSaga(),
    AttendanceSaga(),
  ]);
  // OR
  // yield all([fork(FeatureSaga1)]);
}
