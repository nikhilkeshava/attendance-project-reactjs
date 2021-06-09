import * as types from "./NotificationTypes";

export function addNotificationData(payload) {
    // console.log('addNotification',payload)
  return {
    type: types.CREATE_NOTIFICATION,
    payload: payload
  };
}
export function addNotificationDataSuccess(payload) {
  return {
    type: types.CREATE_NOTIFICATION_SUCCESS,
    payload: payload
  };
}
export function addNotificationDataError(error) {
  return {
    type: types.CREATE_NOTIFICATION_ERROR,
    payload:error
  };
}

export function getNotificationData(payload) {
    return {
      type: types.GET_NOTIFICATION,
      payload: payload
    };
  }
  export function getNotificationDataSuccess(payload) {
    return {
      type: types.GET_NOTIFICATION_SUCCESS,
      payload: payload
    };
  }
  export function getNotificationDataError(error) {
    return {
      type: types.GET_NOTIFICATION_ERROR,
      payload:error
    };
  }

//   export function deleteNotificationData(payload) {
//     return {
//       type: types.DELETE_NOTIFICATION,
//       payload: payload
//     };
//   }
//   export function deleteNotificationDataSuccess(payload) {
//     return {
//       type: types.DELETE_NOTIFICATION_SUCCESS,
//       payload: payload
//     };
//   }
//   export function deleteNotificationDataError(error) {
//     return {
//       type: types.DELETE_NOTIFICATION_ERROR,
//       payload:error
//     };
//   }
