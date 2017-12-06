import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import Styles from '/src/const/styles';
import { navigateTo } from '/src/services/navigation';
import user from '/src/utils/user';

class LoadingScreen extends Component {
  componentWillMount() {
    user.token
      .then((user_token) => {
        navigateTo(this.props.navigation, user_token ? 'User' : 'Default', true);
      })
      .catch(console.log);
  }

  render() {
    return (
      <View>
        <Text style={Styles.Font.H1}>
          Loading...
        </Text>
      </View>

    );
  }
}

export default LoadingScreen;
