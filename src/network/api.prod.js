import Config from './config';
import device from '/src/utils/device';
import user from '/src/utils/user';

const offset = -new Date().getTimezoneOffset();

export default function(target, payload=undefined, verb='POST') {
  const allowLogs = __DEV__;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-TimeOffset': offset,
  };

  return user.token
    .then((user_token) => {
      if (user_token) {
        headers['Authorization'] = 'Bearer ' + user_token;
      }
      let params = {
        method: verb,
        headers: headers
      };

      if (payload) {
        if ('id' in payload) {
          if (payload.id) {
            target = [target, payload.id].join('/');
          }
          delete payload.id;
        }
        if (verb != 'GET') {
          params['body'] = JSON.stringify(payload); 
        } else {
          var strPars = Object.keys(payload).map(function(key) {
            return key + '=' + payload[key];
          }).join('&');
          target += (target.includes('?') ? '&' : '?') + strPars;
        }
      }
      allowLogs && console.log('Network fetch');
      allowLogs && console.log(target);
      allowLogs && console.log(params);

      return fetch(Config.Endpoint + target, params);
    })
    .catch((ex) => { allowLogs && console.log(ex); return ex; })
    .then((response) => {
      allowLogs && console.log(response);
      if (response.status != 200) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      allowLogs && console.log(data);
      allowLogs && console.log('Network fetch complete');
      return data;
    });
};
