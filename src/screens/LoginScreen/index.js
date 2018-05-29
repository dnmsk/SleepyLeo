import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { loginUser, navigateBack } from '../../actions/UserActions';
import { Styles } from '../../const/styles';

import WindowTitle from '../../components/WindowTitle';
import Text from '../../components/Text';
import Center from '../../components/Center';
import Cross from '../../components/Cross';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import AppFooter from '../../components/Footer/AppFooter';
import { ButtonPrimary } from '../../components/Button';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = __DEV__
      ? {
        login: 'test17@test.test',
        password: 'qwerty'
      }
      : {};
  }

  render() {
    const paddingHorizontal = Styles.Fn.HorizontalPercent(0.1);
    return (
      <Container>
        <Content>
          <WindowTitle>
            <Cross Large onPress={() => {this.props.navigateBack();}}
              style={{position: 'absolute', left: '-25%', top: '10%'}} />
            <Text style={[Styles.Font.H3]}>
              Авторизация
            </Text>
          </WindowTitle>
          <Center style={{paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal}}>
            <Text style={[Styles.Font.H2, { textAlign: 'center', marginTop: Styles.Fn.VerticalPercent(0.07) }]}>
              Вход
            </Text>
            <Text style={[Styles.Font.H2, { textAlign: 'center' }]}>
              в сервис
            </Text>
            <Input
              style={{marginTop: Styles.Fn.VerticalPercent(0.15)}}
              placeholder='Email'
              onChangeText={(text) => this.setState({login: text})}
              value={this.state.login} />

            <Input
              style={{marginTop: Styles.Fn.VerticalPercent(0.05)}}
              placeholder='Пароль'
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              value={this.state.password} />

            <ButtonPrimary
              onPress={() => { this._doLogin(); }}
              containerStyle={{marginTop: Styles.Fn.VerticalPercent(0.05)}}>
              Войти
            </ButtonPrimary>
          </Center>
        </Content>
        <AppFooter />
      </Container>
    );
  }

  _doLogin() {
    this.props.loginUser({Email: this.state.login, Password: this.state.password});
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {loginUser, navigateBack})(LoginScreen);
