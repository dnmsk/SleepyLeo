import { DEVICE_INIT } from '../const/actions';

export async function deviceInit() {
  return new Promise((resolve, reject) => {
    resolve({
      type: DEVICE_INIT,
      payload: {
        token: 'bla-bla'
      }
    });
  });
};
