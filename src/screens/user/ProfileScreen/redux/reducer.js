import { PROFILE_GET } from './const';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFILE_GET:
    console.log('PROFILE_GET', action);
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
