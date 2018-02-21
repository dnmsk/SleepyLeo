import React, { Component } from 'react';
import Footer from './';
import Text from '../Text';

class AppFooter extends React.Component {
  render() {
    return (
      <Footer>
        <Text style={{ textAlign: 'center' }}>
          © 2018 - SleepyLeo{"\n"}Support: sleepyleo@answerdesk.io
        </Text>
      </Footer>
    );
  }
}

export default AppFooter;
