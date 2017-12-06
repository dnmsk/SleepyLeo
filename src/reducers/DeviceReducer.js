import { DEVICE_INIT } from '../const/actions';
import device from '/src/utils/device';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEVICE_INIT:
      device.token = action.payload.token;
      return state;
    default:
      return state;
  }
}
