import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { USER_LOGOUT } from '/src/const/actions';

import DataReducer from './DataReducer';
import DeviceReducer from './DeviceReducer';
import NavigationReducer from '/src/navigation/redux/reducer';
import NotificationReducer from '/src/components/notifications/redux/reducer';
import ProfileReducer from '/src/screens/user/ProfileScreen/redux/reducer';
import SleepReducer from '/src/screens/user/SleepScreen/redux/reducer';
import UserReducer from './UserReducer';

const configFor = function(key) {
  return {
    key: key,
    storage
  };
};

function withResetState(reducer) {
  return (state, action) => {
    if (action.type == USER_LOGOUT) {
      state = undefined;
    }
    return reducer(state, action);
  };
};

const rootReducer = combineReducers({
  my_sleep: withResetState(SleepReducer),
  user: persistReducer(configFor('user'), UserReducer),
  device: persistReducer(configFor('device'), DeviceReducer),
  data: withResetState(DataReducer),
  nav: NavigationReducer,
  notifications: withResetState(NotificationReducer),
  profile: withResetState(ProfileReducer)
});

export default rootReducer;
