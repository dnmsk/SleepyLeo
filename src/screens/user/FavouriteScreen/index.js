import React, { Component } from 'react';
import { View } from 'react-native';
import { Styles } from '../../../const/styles';
import Text from '../../../components/Text';
import { ButtonPrimary } from '../../../components/Button';

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
