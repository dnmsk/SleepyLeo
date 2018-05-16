import user from '/src/utils/user';

import * as baseFunctions from '/src/actions/base';
import { DEFAULT, USER_LOGIN, USER_REGISTER, USER_LOGOUT } from '/src/const/actions';
import Net from '/src/network';
import { getProfile } from '/src/screens/user/ProfileScreen/redux/actions';

export function logoutUser() {
  return (dispatch) => {
    dispatch({
      type: USER_LOGOUT,
      payload: {}
    });
    baseFunctions.navigateTo('Default', {}, true)(dispatch);
  };
};

module.exports = {
  ...baseFunctions,
  ...module.exports,
  initUser: function() {
    return (dispatch) => {
      user.token
        .then((user_token) => {
          if (user_token) {
            getProfile()(dispatch);
            baseFunctions.navigateTo('User', {}, true)(dispatch);
          } else {
            baseFunctions.navigateTo('Default', {}, true)(dispatch);
          }
        });
    }
  },

  loginUser: function(credentials, postFunction) {
    return (dispatch) => {
      Net(dispatch).Login.post(credentials)
        .then((data) => {
          dispatch({
            type: USER_LOGIN,
            payload: { 
              ...data, 
              name: credentials.Email
            }
          });
          getProfile()(dispatch);
          baseFunctions.navigateTo('User', {}, true)(dispatch); 
        });
    };
  },

  registerUser: function(credentials, postFunction) {
    return (dispatch) => {
      Net(dispatch).Register.post(credentials)
        .then((data) => {
          dispatch({
            type: USER_REGISTER,
            payload: {
              ...data,
              name: credentials.Email
            }
          });
          getProfile()(dispatch);
          baseFunctions.navigateTo('User', {}, true)(dispatch); 
        });
    };
  },
}
