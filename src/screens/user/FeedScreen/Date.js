import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../../const/styles';

import { toDateString } from '../../../functions/date';

import Center from '../../../components/Center';
import Text from '../../../components/Text';

class DateComponent extends React.Component {
  render() {
    return (
      <Center>
        <View style={{
          borderColor: '#fdfdfb',
          borderRadius: Styles.Fn.HorizontalPercent(4/Styles.Const.maketWidth)/2,
          borderWidth: 1,
          paddingLeft: Styles.Fn.HorizontalPercent(0.08),
          paddingRight: Styles.Fn.HorizontalPercent(0.08),
          paddingTop: Styles.Fn.HorizontalPercent(0.015),
          paddingBottom: Styles.Fn.HorizontalPercent(0.01),
        }}>
          <Text style={[Styles.Font.Info, Styles.Font.H6, Styles.Font.Bold]}>
            {toDateString(this.props.value, 'year')}
          </Text>
        </View>
      </Center>
    );
  }
}

export default DateComponent;
