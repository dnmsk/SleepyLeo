import * as Login from './login.mock';
import * as Register from './register.mock';

const Net = {
  Login: Login,
  Profile: {
    get: null
  },
  Recommendations: {
    get: null
  },
  Register: Register,
  Sleep: {
    get: null,
    post: null,
    delete: null,
  },
  SleepNorm: {
    get: null
  },
  Sleeps: {
    get: null
  }
};

export default Net;
