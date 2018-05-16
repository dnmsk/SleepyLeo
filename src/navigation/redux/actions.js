import { DEVICE_INIT } from '/src/const/actions';
import * as baseFunctions from '/src/actions/base';

module.exports = {
  ...baseFunctions,
  deviceInit: function() {
    return (dispatch) => {
      dispatch({
        type: DEVICE_INIT,
        payload: {
          token: 'bla-bla'
        }
      });
    }
  }
};
