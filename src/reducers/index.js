import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import DataReducer from './DataReducer';
import DeviceReducer from './DeviceReducer';
import UserReducer from './UserReducer';

const configFor = function(key) {
  return {
    key: key,
    storage
  };
};

const rootReducer = combineReducers({
  user: persistReducer(configFor('user'), UserReducer),
  device: persistReducer(configFor('device'), DeviceReducer),
  data: DataReducer,
});

export default rootReducer;
