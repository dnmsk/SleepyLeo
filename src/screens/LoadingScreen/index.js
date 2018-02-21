import { connect } from 'react-redux';
import React, { Component } from 'react';
import Loading from './Loading';
import { initUser } from '/src/actions/UserActions';

class LoadingScreen extends Component {
  componentWillMount() {
    this.props.initUser();
  }

  render() {
    return (
      <Loading />
    );
  }
}

export default connect(null, {initUser})(LoadingScreen);
