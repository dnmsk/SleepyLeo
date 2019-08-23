import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../../const/styles';

import Br from '../../../components/Br';
import Row from '../../../components/Row';
import Text from '../../../components/Text';

import BaseSleep from '../../../blocks/Sleep';

class Sleep extends React.Component {
  render() {
    const borderRadius = Styles.Fn.HorizontalPercent(4/Styles.Const.maketWidth)/2;
    return (
      <View>
        <Br />
        <View style={{paddingLeft: Styles.Fn.HorizontalPercent(0.12)}}>
          <Row>
            {this.props.sleepType == 'daySummary'
              ? <Text style={Styles.Font.InfoOrange}>Дневной сон</Text>
              : <Text style={Styles.Font.InfoBlue}>Ночной сон</Text>}
          </Row>
          <Br />
          { this.props.sleepsToRender.map((sleep, i) => {
              return (
                <View key={i}>
                  {this.props.onlyMySleeps
                    ? <BaseSleep
                        onSleepPress={this.props.openEditScreen}
                        deleteSleep={this.props.deleteSleep}
                        scaleWidth={.88}
                        sleep={sleep} />
                    : <BaseSleep
                        sleep={sleep} />}
                </View>);
          })}
        </View>
        {this.props.message && <View style={{
            borderBottomLeftRadius: borderRadius,
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            backgroundColor: this.props.message.isWarning ? '#8c5a8b' : '#5b4672',
            paddingLeft: Styles.Fn.HorizontalPercent(0.12),
            paddingTop: Styles.Fn.HorizontalPercent(0.04),
            paddingBottom: Styles.Fn.HorizontalPercent(0.06),
            paddingRight: Styles.Fn.HorizontalPercent(0.08),
          }}>
            <Text>{this.props.message.message}</Text>
          </View>
        }
      </View>
    );
  }
}

export default Sleep;
