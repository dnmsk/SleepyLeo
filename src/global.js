import storage from './store/storage';

if (typeof global.self === 'undefined') {
  global.self = global
}

global.storage = storage;
