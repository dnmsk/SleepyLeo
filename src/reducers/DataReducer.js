import { DATA_SLEEP_NORMS, RESET } from '../const/actions';

const INITIAL_STATE = {
  norms: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_SLEEP_NORMS:
      return {
        ...state,
        norms: action.payload.data
      };
    case RESET: 
      return INITIAL_STATE;
    default:
      return state;
  }
}
