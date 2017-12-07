import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import DefaultNavigation from './DefaultNavigation';
import UserNavigation from './UserNavigation';
import LoadingScreen from '/src/screens/LoadingScreen';
import { deviceInit } from '/src/actions/DeviceActions';
import Styles from '/src/const/styles';
import device from '/src/utils/device';

const AppNavigation = StackNavigator({
    User: {
      screen: UserNavigation
    },
    Default: {
      screen: DefaultNavigation
    },
    Loading: {
      screen: LoadingScreen
    }
  }, {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Loading'
});

class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this._initUserAsynс();
  }

  _initUserAsynс() {
    device.token
      .then((device_token) => {
        if (!device_token) {
          this.props.deviceInit();
        }
      })
      .catch(console.log);
  }

  render() {
      return (
        <View style={styles.container}>
          <AppNavigation />
        </View>
      );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.navigation,
    user: state.user,
    device: state.device
  };
};

const mapDispatchToProps = (dispatch) => ({
  deviceInit: () => deviceInit().then((data) => {
    dispatch(data);
  }).catch(console.log)
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);

const styles = StyleSheet.create({ container: Styles.Background.Container });
