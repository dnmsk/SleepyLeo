import { DATA_SLEEP_NORMS } from '../const/actions';

const INITIAL_STATE = {
  norms: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DATA_SLEEP_NORMS:
    return {
      ...state,
      norms: action.payload
    };
  default:
    return state;
  }
};
