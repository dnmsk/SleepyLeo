import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import Styles from '/src/const/styles';
import { navigateTo } from '/src/services/navigation';
import { logoutUser } from '/src/actions/UserActions';

class ProfileScreen extends Component {
  static navigationOptions = (navigation) => {
    return {
      tabBarLabel: 'Профиль',
    };
  }

  render() {
    return (
      <View>
        <Text>
          Bla-Bla настройки профиля {(<Text style={Styles.Font.H4}>
            {this.props.user.user_details.name}
          </Text>)}
        </Text>

        <Button
          style={Styles.Button.Primary.Style}
          containerStyle={Styles.Button.Primary.ContainerStyle}
          onPress={ () => { this._doExit(); }}>
          Выход
        </Button>
      </View>

    );
  }
  _doExit = () => {
    this.props.logoutUser(this);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (component) => {
      logoutUser()
        .then((action) => { dispatch(action); return action; })
        .then((action) => {
          navigateTo(component.props.navigation, 'Default', true);
        })
        .catch(console.log);
    }
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
