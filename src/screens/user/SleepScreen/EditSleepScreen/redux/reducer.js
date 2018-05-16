import { DEFAULT, SLEEP_EDIT_LOAD, SLEEP_EDIT_SET_MODE, SLEEP_EDIT,SLEEP_EDIT_DATE } from './const';

const INITIAL_STATE = {
  id: undefined,
  since: null,
  wakeup: null,
  isDaySleep: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SLEEP_EDIT:
    return {
      ...state,
      ...action.payload
    };
  case SLEEP_EDIT_LOAD: 
    return {
      ...state,
      ...action.payload
    };
  case SLEEP_EDIT_SET_MODE:
    return {
      ...state,
      isDaySleep: action.payload
    };
  case SLEEP_EDIT_DATE:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
