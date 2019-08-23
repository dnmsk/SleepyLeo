import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../const/styles';

export default class Br extends React.Component {
  render() {
    return (
      <View
        style={[
          Styles.Blocks.Br,
          this.props.style
        ]}>
      </View>
    );
  }
}
