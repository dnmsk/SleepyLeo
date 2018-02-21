import { DEFAULT, SLEEP_GET, SLEEP_SET_MODE, SLEEP_POST, SLEEP_PUT, SLEEPS_GET, SLEEP_DELETE, SLEEP_RECOMMENDATIONS_GET } from './const';
import Net from '/src/network';
import * as baseFunctions from '/src/actions/base';
import { isToday } from '/src/functions/date';
import { isDaySleep } from './sleepSwitcherFunctions';
import { numberToHourMin, toTimeString } from '/src/functions/date';

export function getSleeps(onSuccess) {
  return (dispatch) => {
    Net(dispatch).Sleeps.get({onlyMySleeps: true, OnlyTodaySleeps: true}).then((data) => {
      let todaySleeps = [];
      if (data && data.sleeps) {
        todaySleeps = data.sleeps;
        //d.page.forEach((val) => {
        //  todaySleeps = todaySleeps.concat(val.sleeps);
          //val.forDate = new Date(val.forDate);
          //if (isToday(val.forDate) && !todaySleeps) {
          //  todaySleeps = val.sleeps;
          //}
        //});
      }
      dispatch({
        type: SLEEPS_GET,
        payload: todaySleeps || []
      });
      onSuccess && onSuccess();
    });
  };
};
export function getLastSleep(onSuccess) {
  return (dispatch) => {
    Net(dispatch).Sleep.get().then((data) => {
      if (data && !data.toTime) {
        dispatch({
          type: SLEEP_GET,
          payload: {
            id: data.id,
            since: new Date(data.fromTime),
            isDaySleep: data.dayNightString === 'Day'
          }
        });
      } else {
        dispatch({
          type: SLEEP_GET,
          payload: {
            isDaySleep: isDaySleep()
          }
        });
      }
      onSuccess && onSuccess();
    });
  };
};

export function getRecommendations() {
  return (dispatch) => {
    Net(dispatch).Recommendations.get().then((data) => {
      console.log('getRecommendations', data)
      dispatch({
        type: SLEEP_RECOMMENDATIONS_GET,
        payload: data
      });
    });
  };
};

export function setSleepMode(isDaySleep) {
  return {
    type: SLEEP_SET_MODE,
    payload: isDaySleep
  };
};

function postSleep(sleep, onSuccess) {
  return (dispatch) => {
    Net(dispatch).Sleep.post({
      IsDaySleep: sleep.isDaySleep,
      SleepEventType: 'GoToSleep',
      WhenGoToSleepDay: 'Today',
      WhenGoToSleepTimeUtc: new Date().toUTCString()
    }).then((data) => {
      let sleep = {
        isDaySleep: data.dayNightString === 'Day',
        since: new Date(data.fromTime),
        id: data.id
      };
      dispatch({
        type: SLEEP_POST,
        payload: sleep
      });
      onSuccess && onSuccess();
    });
  };
};

function putSleep(sleep, onSuccess) {
  return (dispatch) => {
    Net(dispatch).Sleep.put({
      id: sleep.id,
      IsDaySleep: sleep.isDaySleep,
      WhenGoToSleepTimeUtc: sleep.since.toUTCString(),
      WhenWakeUpTimeUtc: new Date().toUTCString(),
    }).then((data) => {
      dispatch({
        type: SLEEP_PUT,
        payload: {
          id: undefined,
          since: undefined
        }
      });
      onSuccess && onSuccess();
    });
  };
};

export function deleteSleep(sleep) {
  return (dispatch) => {
    let confirmationText = 'Точно удалить сон c ' + toTimeString(sleep.goToSleepTime, 'minutes') + ' до ' + toTimeString(sleep.awakeTime, 'minutes') + '?';

    baseFunctions.showConfirm(null, confirmationText, 'Да, удалить',
      () => {
        Net(dispatch).Sleep.delete({id: sleep.sleepGuid})
          .then((data) => {
            getRecommendations()(dispatch);
            getSleeps()(dispatch);
          });
      })(dispatch);
  };
}

export function userButtonSleepPressed(sleep, onSuccess) {
  return (dispatch) => {
    if (sleep.since) {
      putSleep(sleep, onSuccess)(dispatch);
    } else {
      postSleep(sleep, onSuccess)(dispatch);
    }
  }
};

module.exports = {
  ...module.exports,
  ...baseFunctions,
};

