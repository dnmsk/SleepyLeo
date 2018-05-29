import { DEVICE_INIT } from '../../const/actions';
import * as baseFunctions from '../../actions/base';

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
