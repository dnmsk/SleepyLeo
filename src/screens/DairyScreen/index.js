import React, { Component } from 'react';
import Button from 'react-native-button';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import Styles from '/src/const/styles';
//import { Card, Button, Icon } from 'react-native-elements';

class DairyScreen extends Component {
  static navigationOptions = (navigation) => {
    return {
      tabBarLabel: 'Дневник',
    };
  }

  render() {
    return (
      <View>
        <Text>
          Bla-Bla дневник снов
        </Text>
        <Button
          style={Styles.Button.Primary.Style}
          containerStyle={Styles.Button.Primary.ContainerStyle}
          onPress={this._toManageScreen}>
          Нормы сна
        </Button>
      </View>

    );
  }
  _toManageScreen = () => {
    this.props.navigation.navigate('UserManage');
  }
}

export default DairyScreen;
