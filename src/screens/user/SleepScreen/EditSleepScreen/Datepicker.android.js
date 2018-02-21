import React, { Component } from 'react';
import { DatePickerAndroid, TimePickerAndroid } from 'react-native';

export default class Datepicker extends Component {
  componentDidMount() {
    const date = this.props.dateTime || new Date();
    const getDateTime = async () => {
        // Selected hour (0-23), minute (0-59)
        try {
          const {action, year, month, day} = await DatePickerAndroid.open({
            // Use `new Date()` for current date.
            // May 25 2020. Month 0 is January.
            date: date,
            mode: 'default',
            maxDate: new Date()
          });
          if (action !== DatePickerAndroid.dismissedAction) {
            // Selected year, month (0-11), day
            try {
              const {action, hour, minute} = await TimePickerAndroid.open({
                hour: date.getHours(),
                minute: date.getMinutes(),
                is24Hour: true, // Will display '2 PM',
                mode: 'default'
              });
              if (action !== TimePickerAndroid.dismissedAction) {
                return new Date(year, month, day, hour, minute);
              }
            } catch ({code, message}) {
              console.warn('Cannot open time picker', message);
            }
          }
        } catch ({code, message}) {
          console.warn('Cannot open date picker', message);
        }
    };
    getDateTime().then((val) => {
      if (val && this.props.onDateTimeSelected) {
        this.props.onDateTimeSelected(new Date(val));
      }
    });
  }

  render() {
    return null;
  }
};
