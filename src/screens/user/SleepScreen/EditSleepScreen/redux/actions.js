import { DEFAULT, SLEEP_EDIT_SET_MODE, SLEEP_EDIT_LOAD, SLEEP_EDIT, SLEEP_EDIT_DATE } from './const';
import Net from '../../../../../network';
import * as baseFunctions from '../../../../../actions/base';
import { getRecommendations, getLastSleep, getSleeps } from '../../redux/actions';
import { isDaySleep } from '../../redux/sleepSwitcherFunctions';

export function getSleep(id, onSuccess) {
  return (dispatch) => {
    id
      ? Net(dispatch).Sleep.get({id}).then((data) => {
        let sleep = {
          isDaySleep: data.dayNightString === 'Day',
          since: new Date(data.fromTime),
          wakeup: data.toTime ? new Date(data.toTime) : null,
          id: data.id
        };
        dispatch({
          type: SLEEP_EDIT_LOAD,
          payload: sleep
        });
        onSuccess && onSuccess();
      })
      : (() => {
          dispatch({
            type: SLEEP_EDIT_LOAD,
            payload: {
              id: null,
              isDaySleep: isDaySleep(),
              since: null,
              wakeup: null
            }
        });
          onSuccess && onSuccess();
      })();
  };
};

export function setSleepMode(isDaySleep) {
  return {
    type: SLEEP_EDIT_SET_MODE,
    payload: isDaySleep
  };
};


export function putSleep(sleep, onSuccess) {
  return (dispatch) => {
    (sleep.id ? Net(dispatch).Sleep.put : Net(dispatch).Sleep.post)({
      id: sleep.id,
      IsDaySleep: !!sleep.isDaySleep,
      WhenGoToSleepTimeUtc: sleep.since,
      WhenWakeUpTimeUtc: sleep.wakeup,
    }).then((data) => {
      getRecommendations()(dispatch);
      getLastSleep()(dispatch);
      getSleeps()(dispatch);
      return baseFunctions.navigateBack({reload: true})(dispatch);        
    });
  };
};

module.exports = {
  ...baseFunctions,
  ...module.exports,
  setSleepTime: function (date, isWakeUp) {
    return isWakeUp ? {
      type: SLEEP_EDIT_DATE,
      payload: { wakeup: date }
    } : {
      type: SLEEP_EDIT_DATE,
      payload: { since: date, isDaySleep: isDaySleep(date) }
    }
  },

  openScreen: function(sleep) {
    return (dispatch) => {
      const pars = sleep ? { sleepId: sleep.sleepGuid || sleep } : undefined;
      baseFunctions.navigateTo('EditSleep', pars)(dispatch);
    };
  }
};
