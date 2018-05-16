import React from 'react';
import Button from 'react-native-button';
import { Styles } from '/src/const/styles';
import Text from '../Text';
import Center from '../Center';

class ButtonPrimary extends React.Component {
  render() {
    return (
      <Button
        containerStyle={[
          Styles.Button.Default.Container,
          this.props.containerStyle
        ]}
        style={[
          Styles.Button.Default.Style
        ]}
        onPress={this.props.onPress}>
        <Center style={[ Styles.Blocks.VerticalMiddle ]}>
          <Text style={[ Styles.Button.Default.Text, this.props.style ]}>
            { this.props.children }
          </Text>
        </Center>
      </Button>
    );
  }
}

export default ButtonPrimary;
