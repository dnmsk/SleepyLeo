//import RNSecureKeyStore from 'react-native-secure-key-store';
//import { AsyncStorage } from 'react-native';

class SecureObject {
  constructor(secure_key_name) {
    this.store_name = 'SecureObject';
    this.secure_key_name = secure_key_name;
  }

  _key_name() {
    return this.store_name + ':' + this.secure_key_name;
  }

  get key() { return this.secure_key_name; }

  get value() {
    return global.storage.load({
      key: this._key_name(),
      
      // autoSync(default true) means if data not found or expired,
      // then invoke the corresponding sync method
      autoSync: true,
      
      // syncInBackground(default true) means if data expired,
      // return the outdated data first while invoke the sync method.
      // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
      syncInBackground: true,
    }).catch((ex) => {
      //console.log(ex);
      return null;
    });
  }

  set value(val) {
    if (val === null) {
      return global.storage.remove({
        key: this._key_name()
      });
    }
    global.storage.save({
      key: this._key_name(),  // Note: Do not use underscore("_") in key!
      data: val
    }).catch(console.log);
    return val;
  }
}

export default SecureObject;
