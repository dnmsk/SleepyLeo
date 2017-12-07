import SecureObject from './SecureObject';

class Device extends SecureObject {
  constructor() {
    super('deviceToken');
  }

  get token() { return this.value; }
  set token(val) { return this.value = val; }
};

export default new Device();
