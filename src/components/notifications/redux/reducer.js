import {
  NOTIFICATION_CONFIRM_SHOW,
  NOTIFICATION_CONFIRM_HIDE,
  NOTIFICATION_ALERT_SHOW,
  NOTIFICATION_ALERT_HIDE } from './const';

const INITIAL_STATE = {
  alert: {
    title: undefined,
    message: undefined,
    hidden: true,
  },
  confirm: {
    title: undefined,
    message: undefined,
    confirmText: undefined,
    successFunction: undefined,
    hidden: true,
  },
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NOTIFICATION_CONFIRM_SHOW:
    return {
      ...state,
      confirm: {
        title: action.payload.title,
        message: action.payload.message,
        confirmText: action.payload.confirmText,
        successFunction: action.payload.successFunction,
        hidden: false
      }
    };
  case NOTIFICATION_CONFIRM_HIDE:
    return {
      ...state,
      confirm: {
        ...INITIAL_STATE.confirm,
        hidden: true
      }
    };
  case NOTIFICATION_ALERT_SHOW:
    return {
      ...state,
      alert: {
        title: action.payload.title,
        message: action.payload.message,
        hidden: false
      }
    };
  case NOTIFICATION_ALERT_HIDE:
    return {
      ...state,
      alert: {
        ...INITIAL_STATE.alert,
        hidden: true
      }
    };
  default:
    return state;
  }
};

export default notificationReducer;
