import React, { Component } from 'react';
import { View } from 'react-native';
import { Styles } from '/src/const/styles';
import Text from '/src/components/Text';
import { ButtonPrimary } from '/src/components/Button';

class DairyScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Bla-Bla дневник снов
        </Text>
        <ButtonPrimary
          onPress={this._toManageScreen}>
          Нормы сна
        </ButtonPrimary>
      </View>

    );
  }
  _toManageScreen = () => {
    this.props.navigation.navigate('UserManage');
  }
}

export default DairyScreen;
