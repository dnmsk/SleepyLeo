import React from 'react';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import './src/global';
import { Styles } from './src/const/styles';
import store from './src/store/configureStore';
import RootNavigation from './src/navigation/RootNavigation';
import Wait from './src/screens/LoadingScreen/Wait';

if (false && __DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: store
    };
  }

  componentDidMount() {
    if (Styles.Fn.isexpo) {
      import('expo')
        .then((expo) => {
          expo.Font.loadAsync({
            'Exo2-Regular': require('./src/const/assets/font/Exo2-Regular.ttf'),
            'Exo2-Bold': require('./src/const/assets/font/Exo2-Bold.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
          })
          .then(() => {
            this.setState({ isLoading: false });
          });
        })
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { store, isLoading } = this.state;
    if (isLoading) {
      return <Wait />;
    }

    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
