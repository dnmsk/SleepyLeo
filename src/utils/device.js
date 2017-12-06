import SecureObject from './SecureObject';

class Device extends SecureObject {
  constructor() {
    super('deviceToken');
  }

  get token() { return super.value; }
  set token(val) { return super.value = val; }
};

export default new Device();
