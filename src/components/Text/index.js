import React from 'react';
import { Text } from 'react-native';
import { Styles } from '/src/const/styles';

class DefaultText extends React.Component {
  render() {
    return (
      <Text
        onPress={this.props.onPress}
        style={[
          Styles.Font.Default,
          this.props.style
        ]}>
        { this.props.children }
      </Text>
    );
  }
}

export default DefaultText;
