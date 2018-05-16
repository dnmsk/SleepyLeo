import React from 'react';
import { Input, Item } from 'native-base';
import { Styles } from '/src/const/styles';

class CustomInput extends React.Component {
  render() {
    return (
      <Item style={[Styles.Blocks.Input.Container, this.props.style]}>
        <Input style={Styles.Blocks.Input.Element}
          placeholder={this.props.placeholder}
          placeholderTextColor={Styles.Blocks.PlaceholderTextColor}
          onChangeText={this.props.onChangeText}
          textAlign={'center'}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value} />
      </Item>
    );
  }
}

export default CustomInput;
