import { NavigationActions } from 'react-navigation';
import { showAlert, showConfirm } from '/src/components/notifications/redux/actions';

export function schedulePeriodicalTask(task, peroid) {
  return (dispatch) => {
    setInterval(() => task(), peroid);
  };
};

export function navigateTo(routeName, params={}, clearStack=false) {
  return (dispatch) => {
    if (clearStack) {
      dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName, params })],
          key: null
        })
      );
    } else {
      dispatch(NavigationActions.navigate({ routeName, params }));
    } 
  }
}

export function navigateBack(params) {
  return (dispatch) => {
    dispatch({...NavigationActions.back(), params});
  }
}

export function dispatch(action) {
  return (dispatch) => {
    dispatch(action);
  };
}

module.exports = {
  ...module.exports,
  showAlert,
  showConfirm
};
