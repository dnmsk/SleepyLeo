import React, { Component } from 'react';
import { Switch } from 'native-base';
import { Styles } from '../../../const/styles';
import Center from '../../../components/Center';
import Text from '../../../components/Text';

class SleepSwitch extends Component {
  _onSwitch(value) {
    if (this.props.enabled === false) {
      return;
    }

    this.props.onValueChange(!value);
  }

  render() {
    let isDaySleep = this.props.isDaySleep;
    const disabledStyle = { opacity: 0.5 };

    return (
      <Center style={Styles.Blocks.Row}>
        <Text
        onPress={() => {this._onSwitch(false);}}
        style={[
          Styles.Font.Info,
          isDaySleep ? {} : disabledStyle
        ]}>Дневной</Text>
        <Switch style={[
            { marginLeft: 10, marginRight: 10 },
            this.props.enabled ? {} : disabledStyle
          ]}
          disabled={this.props.enabled === false}
          onValueChange={(value) => {this._onSwitch(value);}}
          value={!isDaySleep} />
        <Text
        onPress={() => {this._onSwitch(true);}}
        style={[
          Styles.Font.Info,
          !isDaySleep ? {} : disabledStyle
        ]}>Ночной</Text>
      </Center>
    );
  }
}

export default SleepSwitch;
