import { logoutUser } from '/src/actions/UserActions';
import { showAlert } from '/src/actions/base';
import Api from './config';
import request from './api';

const buildAsyncFunction = (target, verb, dispatch) => {
  return (payload) => {
    return request(target, payload, verb)
      .catch((ex) => {
        console.log(ex);
        if (ex.status === 401) {
          logoutUser()(dispatch);
        }
        return ex;
      })
      .then((data) => {
        if (!data.success && data.message) {
          showAlert('Ошибка', data.message)(dispatch);
          throw data;
        }
        return data.data;
      });
  };
};

const Net = (dispatch) => {
  const funcBuilder = (target, verb) => {
    return buildAsyncFunction(target, verb, dispatch);
  };
  return {
    Login: {
      post: funcBuilder(Api.Login, 'POST')
    },
    Profile: {
      get: funcBuilder(Api.Profile, 'GET')
    },
    Recommendations: {
      get: funcBuilder(Api.Recommendations, 'GET')
    },
    Register: {
      post: funcBuilder(Api.Register, 'POST')
    },
    Sleep: {
      get: funcBuilder(Api.Sleep, 'GET'),
      post: funcBuilder(Api.Sleep, 'POST'),
      put: funcBuilder(Api.Sleep, 'PUT'),
      delete: funcBuilder(Api.Sleep, 'DELETE'),
      Last: {
        get: funcBuilder(Api.LastSleep, 'GET'),
      }
    },
    SleepNorm: {
      get: funcBuilder(Api.SleepNorm, 'GET')
    },
    Sleeps: {
      get: funcBuilder(Api.Sleeps, 'GET')
    }
  };
};

export default Net;
