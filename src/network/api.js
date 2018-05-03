const api = (__DEV__/**/ && false/**/) ? require('./api.dev') : require('./api.prod');

module.exports = api;
