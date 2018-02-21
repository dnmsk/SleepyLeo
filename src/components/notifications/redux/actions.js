import {
  NOTIFICATION_CONFIRM_SHOW,
  NOTIFICATION_CONFIRM_HIDE,
  NOTIFICATION_ALERT_SHOW,
  NOTIFICATION_ALERT_HIDE } from './const';

export function showConfirm(title, message, confirmText, successFunction) {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_CONFIRM_SHOW,
      payload: {
        title,
        message,
        confirmText,
        successFunction
      }
    });
  };
};

export function closeConfirm(successFunction) {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_CONFIRM_HIDE
    });
    successFunction && successFunction();
  };
};

export function showAlert(title, message) {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_ALERT_SHOW,
      payload: {
        title,
        message,
      }
    });
  };
};

export function closeAlert() {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_ALERT_HIDE
    });
  };
};
