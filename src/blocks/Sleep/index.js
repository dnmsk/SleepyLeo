import React, { Component } from 'react';
import { View } from 'react-native';
import { Right } from 'native-base';
import { Styles, Images } from '../../const/styles';
import { numberToHourMin, toTimeString } from '../../functions/date';

import Cross from '../../components/Cross';
import Row from '../../components/Row';
import Text from '../../components/Text';

class Sleep extends Component {
  render() {
    const val = this.props.sleep;
    const onPress = (s) => {
      this.props.onSleepPress && this.props.onSleepPress(s);
    };

    return (
    <View style={{marginBottom: 10}}>
      { val.parts 
        ? <Row>
            <View style={{width: Styles.Fn.HorizontalPercent(0.3)}}>
              <Text
                style={Styles.Font.Info}>
                {numberToHourMin(val.timeInHours)}
              </Text>
            </View>
            <View style={{width: Styles.Fn.HorizontalPercent(0.5)}}>
              <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
                <Text
                  style={[Styles.Font.Info]}>
                  c {toTimeString(val.goToSleepTime, 'minutes')} до {toTimeString(val.awakeTime, 'minutes')}
                </Text>
              </View>
              {val.parts.map((part, idx) => {
                return <Row key={idx}>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
                    <Text
                      style={[Styles.Font.Info, Styles.Font.Inactive, {textDecorationLine: 'underline'}]}
                      onPress={() => {onPress(part)}}>
                      c {toTimeString(part.goToSleepTime, 'minutes')} до {toTimeString(part.awakeTime, 'minutes')}
                    </Text>
                  </View>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.1)}}>
                    { !!this.props.deleteSleep && <Right>
                      <Cross Yellow onPress={() => { this.props.deleteSleep(part); }} />
                    </Right> }
                  </View>
                </Row>
              })}
            </View>
          </Row>
        : <Row>
            <View style={{width: Styles.Fn.HorizontalPercent(0.3)}}>
              <Text
                style={Styles.Font.Info}>
                {numberToHourMin(val.timeInHours)}
              </Text>
            </View>
            <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
              <Text
                style={[Styles.Font.Info, {textDecorationLine: 'underline'}]}
                onPress={() => {onPress(val)}}>
                c {toTimeString(val.goToSleepTime, 'minutes')} до {toTimeString(val.awakeTime, 'minutes')}
              </Text>
            </View>
            <View style={{width: Styles.Fn.HorizontalPercent(0.1)}}>
              { !!this.props.deleteSleep && <Right>
                <Cross Yellow onPress={() => { this.props.deleteSleep(val); }} />
              </Right> }
            </View>
          </Row>
      }
      </View>
    );
  }
}

export default Sleep;
