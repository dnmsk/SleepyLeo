import { SLEEPS_GET_FEED, SLEEPS_GET_APPEND_FEED } from './const';
const INITIAL_STATE = {
  sleeps: []
};

const currentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SLEEPS_GET_FEED:
    return {
      ...state,
      sleeps: action.payload
    };
  case SLEEPS_GET_APPEND_FEED:
    return {
      ...state,
      sleeps: state.sleeps.concat(action.payload)
    };
  default:
    return state;
  }
};

export default currentReducer;
