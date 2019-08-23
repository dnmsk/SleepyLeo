import React from 'react';
import { BackHandler, Dimensions, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import AppNavigator from './AppNavigator';
import { Styles } from '../const/styles';
import device from '../utils/device';
import * as actions from './redux/actions';
import * as baseActions from '../actions/base';

import BackgroundImage from '../components/BackgroundImage';
import Alert from '../components/notifications/Alert';
import Confirm from '../components/notifications/Confirm';
import PushNotificator from '../utils/PushNotificator';

const addListener = createReduxBoundAddListener('root');

class Navigation extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    if (this._shouldCloseApp(this.props.nav)) {
      if (!Styles.Fn.ios) {
        console.log('baseActions.showConfirm', baseActions.showConfirm);
        this.props.showConfirm('Выйти?', '', 'Да, выйти', () => {
          BackHandler.exitApp();
        });
        return true; 
      }
      return false;
    }
    this.props.navigateBack();
    return true;
  };

  _shouldCloseApp = (nav) => {
    if (nav.index > 0) return false;
    if (nav.routes) {
      return nav.routes.every(this._shouldCloseApp);
    }
    return true;
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })}/>
    );
  }
};

const navigationMapStateToProps = (state) => ({
  nav: state.nav
});

const WithNavigationState = connect(navigationMapStateToProps, {...actions, showConfirm: baseActions.showConfirm})(Navigation);

class RootNavigation extends React.Component {
  constructor(props) {
    PushNotificator((notification) => {});
    super(props);
    this.state = this._getDimensions();
  }

  componentWillMount() {
    this._initUserAsynс();
    Dimensions.addEventListener('change', () => {
      this.setState(this._getDimensions());
    });
  }

  _getDimensions() {
    return {
      height: Styles.Fn.height(),
      width: Styles.Fn.width()
    };
  }

  _initUserAsynс() {
    device.token
      .then((device_token) => {
        if (!device_token) {
          this.props.deviceInit();
        }
      })
      .catch(console.log);
  };

  render() {
    return (
      <View style={[Styles.Background.MainContainer]}>
        <BackgroundImage
          style={[Styles.Background.Container]}
          imageSource={Styles.Background.ImgSrc}>
          <View style={[
            Styles.Background.Layout.Style,
            { height: this.state.height, width: this.state.width }
          ]}>
            <WithNavigationState/>
          </View>
        </BackgroundImage>
        <Alert />
        <Confirm />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    device: state.device
  };
};

export default connect(mapStateToProps, actions)(RootNavigation);
