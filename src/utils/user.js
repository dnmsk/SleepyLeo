import SecureObject from './SecureObject';
import store from '/src/store/configureStore';

class User extends SecureObject {
  constructor() {
    super('userToken');
  }

  get details() {
    return store.user_details
  }

  get authorized() {
    return this.details !== undefined;
  }

  get token() { return this.value; }
  set token(val) { return this.value = val; }
};

const user = new User();

export default user;
