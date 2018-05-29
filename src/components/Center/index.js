import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../const/styles';

class CenterView extends React.Component {
  render() {
    return (
      <View
        style={[
          Styles.Blocks.Center,
          this.props.style
        ]}>
        { this.props.children }
      </View>
    );
  }
}

export default CenterView;
