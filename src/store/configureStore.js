import { createStore, applyMiddleware } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import rootReducer from '../reducers';

let middlewares = [
  thunk,
  createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
  )
];
if (__DEV__) {
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

let store = createStoreWithMiddleware(rootReducer);
persistStore(store);

export default store;
