import React, { Component } from 'react';
import { Switch } from 'native-base';
import { Styles } from '../../const/styles';
import Center from '../Center';
import Text from '../Text';

class Switcher extends Component {
  _onSwitch(value) {
    if (this.props.enabled === false || this.props.active == value) {
      return;
    }
    this.props.onValueChange(!value);
  }

  render() {
    let isActive = this.props.active;
    const disabledStyle = { opacity: 0.5 };

    return (
      <Center style={Styles.Blocks.Row}>
        <Text
        onPress={() => {this._onSwitch(false);}}
        style={[
          Styles.Font.Info,
          !this.props.active ? {} : disabledStyle
        ]}>{this.props.left}</Text>
        <Switch style={[
            { marginLeft: 10, marginRight: 10 },
            this.props.enabled ? {} : disabledStyle
          ]}
          disabled={this.props.enabled === false}
          onValueChange={(value)=>this.props.onValueChange(!value)}
          value={this.props.active} />
        <Text
        onPress={() => {this._onSwitch(true);}}
        style={[
          Styles.Font.Info,
          this.props.active ? {} : disabledStyle
        ]}>{this.props.right}</Text>
      </Center>
    );
  }
}

export default Switcher;
