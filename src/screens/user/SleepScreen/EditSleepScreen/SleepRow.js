import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { isToday, toDateString, toTimeString } from '../../../../functions/date';
import { Styles } from '../../../../const/styles';

import Row from '../../../../components/Row';
import Text from '../../../../components/Text';

class EditSleepScreen extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.onPress(); }}>
        <Row style={this.props.style}>
          <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
            <Text>
              {this.props.children}
            </Text>
          </View>
          <View style={{width: Styles.Fn.HorizontalPercent(0.4)}}>
            { this.props.date 
              ? <Text
                  style={[Styles.Font.InfoOrange]}>
                  {isToday(this.props.date) ? 'сегодня' : toDateString(this.props.date) }
                  {' '}
                  {toTimeString(this.props.date, 'minutes')}
                </Text>
              : <Text>Укажите время</Text>
            }
          </View>
        </Row>
      </TouchableOpacity>
    );
  }
}

export default EditSleepScreen;
