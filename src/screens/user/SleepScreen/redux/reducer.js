import { combineReducers } from 'redux';
import { DEFAULT, SLEEP_SET_MODE, SLEEP_GET, SLEEPS_GET, SLEEP_POST, SLEEP_PUT, SLEEP_DELETE, SLEEP_RECOMMENDATIONS_GET } from './const';
import editSleepReducer from '../EditSleepScreen/redux/reducer';

const INITIAL_STATE = {
};

const currentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SLEEP_GET:
  case SLEEP_POST:
  case SLEEP_PUT:
    return {
      ...state,
      ...action.payload
    };
  case SLEEP_DELETE: 
    return {
      ...INITIAL_STATE
    };
  case SLEEP_SET_MODE:
    return {
      ...state,
      isDaySleep: action.payload
    };
  case SLEEP_RECOMMENDATIONS_GET:
    return {
      ...state,
      recommendations: action.payload
    };
  default:
    return state;
  }
};

const todayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SLEEPS_GET:
    return {
      ...state,
      sleeps: action.payload
    };
  default:
    return state;
  }
};

export default combineReducers({
  current: currentReducer,
  today: todayReducer,
  edit_sleep: editSleepReducer
});
