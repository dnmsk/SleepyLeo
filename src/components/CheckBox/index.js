import React from 'react';
import { Body, CheckBox, Item, Left, StyleProvider } from 'native-base';
import { Styles } from '../../const/styles';

class CheckBoxCustom extends React.Component {
  render() {
    return (
      <Item style={[Styles.Blocks.Input.Container, {borderBottomWidth: 0}]}>
        <CheckBox
          checked={this.props.checked} onPress={this.props.onPress} />
        <Body style={{paddingLeft: 4}}>
          {this.props.children}
        </Body>
      </Item>
    );
  }
}

export default CheckBoxCustom;
