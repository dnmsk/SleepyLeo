import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { loginUser } from '/src/actions/UserActions';
import Styles from '/src/const/styles';
import { navigateTo } from '/src/services/navigation';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Вход',
  }

  constructor(props) {
    super(props);
    this.state = {
      login: 'test17@test.test',
      password: 'qwerty'
    };
  }

  render() {
    return (
        <View>
          <Text style={Styles.Font.H5}>
            Войдите в свой аккаунт. Регистрация необходима, чтобы узнать возраст вашего малыша, без этого мы не сможем ничего порекомендовать!
          </Text>
          <FormLabel labelStyle={Styles.Font.H4}>Email</FormLabel>
          <FormInput
            onChangeText={(text) => this.setState({login: text})}
            value={this.state.login}
            placeholder="Введите Email"/>

          <FormLabel labelStyle={Styles.Font.H4}>Пароль</FormLabel>
          <FormInput
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
            placeholder="Введите ваш пароль"/>

          {!!this.state.message && (
            <FormValidationMessage>{this.state.message}</FormValidationMessage>
          )}
          <Button
            onPress={() => { this._doLogin(); }}
            title="Войти"
            style={Styles.Button.Primary.Style} />
        </View>

    );
  }

  _doLogin() {
    this.props.loginUser(
      {Email: this.state.login, Password: this.state.password},
      this
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (credentials, component) => {
      loginUser(credentials)
        .then((action) => {
          dispatch(action);
          return action;
        })
        .then((action) => {
          if (action.payload.success) {
            navigateTo(component.props.navigation, 'User', true); 
          } else {
            component.setState({message: action.payload.message})
          }
        })
        .catch(console.log);
    }
  }
};

const mapStateToProps = state => {
  return {
    navigationState: state.navigation,
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
