import React, { Component } from 'react';
import { Switch } from 'native-base';
import { Styles } from '../../../const/styles';
import Center from '../../../components/Center';
import Switcher from '../../../components/Switcher';
import Text from '../../../components/Text';

class SleepSwitch extends Component {
  render() {
    return (<Switcher
        left={'Дневной'}
        right={'Ночной'}
        enabled={this.props.enabled}
        active={!this.props.isDaySleep}
        onValueChange={this.props.onValueChange}
      />
    );
  }
}

export default SleepSwitch;
