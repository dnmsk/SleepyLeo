import React from 'react';
import ButtonPrimary from './Primary';
import { Styles } from '../../const/styles';

class ButtonSlave extends React.Component {
  render() {
    return (
      <ButtonPrimary
        containerStyle={[
          Styles.Button.Slave.Container,
          this.props.containerStyle
        ]}
        style={[
          Styles.Button.Slave.Text,
          this.props.style
        ]}
        onPress={this.props.onPress}>
        { this.props.children }
      </ButtonPrimary>
    );
  }
}

export default ButtonSlave;
