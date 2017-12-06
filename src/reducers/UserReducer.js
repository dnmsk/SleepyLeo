import { RESET, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from '../const/actions';
import user from '/src/utils/user';

const INITIAL_STATE = {
  user_details: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
    case USER_REGISTER:
      user.token = action.payload.data.token;
      let data = {
        ...state,
        user_details: {
          name: action.payload.name
        }
      };
      return {
        ...state,
        user_details: {
          name: action.payload.name
        }
      };
    case RESET: 
    case USER_LOGOUT:
      user.token = null;
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
}
