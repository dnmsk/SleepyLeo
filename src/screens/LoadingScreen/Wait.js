import React, { Component } from 'react';
import { Spinner } from 'native-base';
import Center from '../../components/Center';

class Wait extends Component {
  render() {
    return (
      <Center>
        <Spinner color='#fff5c8' />
        { this.props.children }
      </Center>
    );
  }
}

export default Wait;
