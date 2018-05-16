import React, { Component } from 'react';
import { DatePickerIOS, View } from 'react-native';

export default class Datepicker extends Component {
  render() {
    return (
      <View>
        <DatePickerIOS
          date={this.props.dateTime || new Date()}
          maximumDate={new Date()}
          mode={'datetime'}
          onDateChange={(val) => { console.log(val); this.props.onDateTimeSelected(new Date(val)); }}/>
      </View>
    );
  }
}
