import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import '/src/global';
import store from '/src/store/configureStore';
import RootNavigation from '/src/navigation/RootNavigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: store
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { store, isLoading } = this.state;
    if (isLoading) {
      return null;
    }

    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
