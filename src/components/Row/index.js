import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../const/styles';

class Row extends React.Component {
  render() {
    return (
      <View
        style={[
          Styles.Blocks.Row,
          this.props.style
        ]}>
        { this.props.children }
      </View>
    );
  }
}

export default Row;
