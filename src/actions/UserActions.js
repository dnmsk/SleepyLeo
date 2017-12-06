import { DEFAULT, RESET, USER_LOGIN, USER_REGISTER, USER_LOGOUT } from '/src/const/actions'
import Net from '/src/network';

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    resolve({
      type: RESET,
      payload: {}
    });
  });
}

export async function loginUser(credentials) {
  return await Net.login(credentials).then((data) => {
    return {
      type: (data.data && data.data.token) ? USER_LOGIN : DEFAULT,
      payload: { 
        ...data, 
        name: credentials.Email
      }
    };
  });
}

export async function registerUser(credentials) {
  return await Net.register(credentials).then((data) => {
    return {
      type: (data.data && data.data.token) ? USER_REGISTER : DEFAULT,
      payload: {
        ...data,
        name: credentials.Email
      }
    };
  });
}
