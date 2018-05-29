import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../const/styles';

export default class Hr extends React.Component {
  render() {
    return (
      <View
        style={[
          Styles.Blocks.Hr,
          this.props.style
        ]}>
      </View>
    );
  }
}
