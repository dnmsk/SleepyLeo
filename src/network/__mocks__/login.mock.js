import { Users } from './consts.mock';
import { findUser } from './functions.mock';

export const post = function(credentials) {
  return new Promise((resolve, reject) => {
    const user = findUser(Users, credentials);
    process.nextTick(() => {
      user
        ? resolve({data: user}) 
        : resolve({
            data: null,
            message: 'Could not create token',
            name: credentials.Email,
            success: true,
          })
    });
  })
};
