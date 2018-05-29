import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Linking, View } from 'react-native';
import { Container, Content } from 'native-base';

import DatePicker from 'react-native-datepicker';

import { Styles } from '../../const/styles';
import { registerUser, navigateBack } from '../../actions/UserActions';
import WindowTitle from '../../components/WindowTitle';
import Text from '../../components/Text';
import Center from '../../components/Center';
import Cross from '../../components/Cross';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import AppFooter from '../../components/Footer/AppFooter';
import { ButtonPrimary } from '../../components/Button';

const dates = (()=> {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth()+1;
  let year = now.getFullYear();
  let formatDate = (y, m, d) => {
    if(m.toString().length == 1) {
      m = '0'+m;
    }
    if(d.toString().length == 1) {
      d = '0'+d;
    }
    return y + '-' + m + '-' + d;
  };
  return {
    minDate: formatDate((year - 2), month, day), 
    maxDate: formatDate(year, month, day) 
  };
})();

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = __DEV__
      ? {
        login: 'test@test.test',
        password: 'test',
        date: '2018-01-01',
        agreeWithPersonal: true
      }
      : { agreeWithPersonal: true };
  }

  _onPressAgreeCheckbox() {
    this.setState({agreeWithPersonal: !this.state.agreeWithPersonal});
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
              Регистрация
            </Text>
          </WindowTitle>
          <Center style={{paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal}}>
            <Text style={[Styles.Font.H2, { textAlign: 'center', marginTop: Styles.Fn.VerticalPercent(0.05) }]}>
              Создание
            </Text>
            <Text style={[Styles.Font.H2, { textAlign: 'center' }]}>
              нового аккаунта
            </Text>

            <Input
              style={{marginTop: Styles.Fn.VerticalPercent(0.04)}}
              placeholder='Email'
              onChangeText={(text) => this.setState({login: text})}
              value={this.state.login} />

            <DatePicker
              style={[Styles.Blocks.Input.Container, {marginTop: Styles.Fn.VerticalPercent(0.05)}]}
              date={this.state.date}
              mode="date"
              placeholder="День рождения ребенка"
              format="YYYY-MM-DD"
              minDate={dates.minDate}
              maxDate={dates.maxDate}
              confirmBtnText="Выбрать"
              cancelBtnText="Отмена"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  borderBottomWidth: 1.5
                },
                dateText: Styles.Blocks.Input.Element,
                placeholderText: [Styles.Blocks.Input.Element, {color: Styles.Blocks.PlaceholderTextColor}]
              }}
              onDateChange={(date) => {this.setState({date: date});}}
            />

            <Input
              style={{marginTop: Styles.Fn.VerticalPercent(0.04)}}
              placeholder='Пароль'
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              value={this.state.password} />

            <ButtonPrimary
              onPress={() => { this._doRegister(); }}
              containerStyle={{marginTop: Styles.Fn.VerticalPercent(0.05)}}>
              Создать
            </ButtonPrimary>
            <View style={{marginTop: Styles.Fn.VerticalPercent(0.04)}}>
              <CheckBox checked={this.state.agreeWithPersonal} onPress={() => {this._onPressAgreeCheckbox();}}>
                <Text style={Styles.Font.Info}>Я принимаю соглашение об</Text>
              </CheckBox>
              <Text style={[Styles.Font.Info,
                  {textDecorationLine: 'underline', marginLeft: Styles.Fn.HorizontalPercent(0.09)}
                ]}
                onPress={() => { Linking.openURL('http://sleepyleo.com/Account/LicenseAgreement'); }}>
                обработке персональных данных
              </Text>
            </View>
          </Center>
        </Content>
        <AppFooter />
      </Container>
    );
  }

  _doRegister() {
    this.props.registerUser(
      {Email: this.state.login, Password: this.state.password, ChildBirthday: this.state.date, IsAgree: this.state.agreeWithPersonal},
      (message) => {
        this.setState({message});
      }
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.navigation,
    user: state.user
  };
};

export default connect(mapStateToProps, {registerUser, navigateBack})(RegisterScreen);
