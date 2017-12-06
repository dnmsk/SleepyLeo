import Config from './config';
import api from './api';

const buildAsyncFunction = (target, verb) => {
  return (payload) => { return api(target, payload, verb); };
};

const Net = {
  login: buildAsyncFunction(Config.Login),
  register: buildAsyncFunction(Config.Register),
  sleepNorms: buildAsyncFunction(Config.SleepNorms, 'GET'),
};

export default Net;
