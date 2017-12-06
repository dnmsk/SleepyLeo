import Config from './config';
import device from '/src/utils/device';
import user from '/src/utils/user';

export default async function(target, payload=undefined, verb='POST') {
  const allowLogs = false;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  //let access_token = device.token + user.token;
  let access_token = user.token;
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
        params['body'] = JSON.stringify(payload);
      }

      allowLogs && console.log('Network fetch');
      allowLogs && console.log(target);
      allowLogs && console.log(params);

      return fetch(Config.Endpoint + target, params);
    })
    .catch((ex) => { allowLogs && console.log(ex); })
    .then((response) => {
      allowLogs && console.log(response);
      return response.json();
    })
    .then((data) => {
      allowLogs && console.log(data);
      allowLogs && console.log('Network fetch complete');
      return data;
    });
};
