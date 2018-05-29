import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { Styles } from '../../const/styles';
import Text from '../../components/Text';
import Wait from './Wait';

class Loading extends Component {
  render() {
    return (
      <Wait>
        <Text style={Styles.Font.H1}>
          Loading...
        </Text>
      </Wait>
    );
  }
}

export default Loading;
