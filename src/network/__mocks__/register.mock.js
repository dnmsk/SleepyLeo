import { Users } from './consts.mock';
import { findUser } from './functions.mock';

export const post = function(credentials) {
  return new Promise((resolve, reject) => {
    const user = findUser(Users, credentials);
    process.nextTick(() => {
      !user
        ? resolve({data: {...credentials, id: -1, token: 'CCCCCC'}})
        : resolve({
            data: null,
            message: 'Registration failed',
            name: 'test22',
            success: false,
          })
    });
  })
};
