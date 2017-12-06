import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

import Styles from '/src/const/styles';
import { navigateTo } from '/src/services/navigation';
import { registerUser } from '/src/actions/UserActions';

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
  }
})();

class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Регистрация',
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <View>
          <Text style={Styles.Font.H5}>
            Создание нового аккаунта
          </Text>

          <FormLabel labelStyle={Styles.Font.H4}>Email</FormLabel>
          <FormInput
            onChangeText={(text) => this.setState({login: text})}
            value={this.state.login}
            placeholder="Введите Email"/>

          <FormLabel labelStyle={Styles.Font.H4}>Дата рождения малыша</FormLabel>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="Выберете дату"
            format="YYYY-MM-DD"
            minDate={dates.minDate}
            maxDate={dates.maxDate}
            confirmBtnText="Выбрать"
            cancelBtnText="Отмена"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />

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
            onPress={() => { this._doRegister(); }}
            title="Регистрация"
            style={Styles.Button.Primary.Style} />
        </View>

    );
  }

  async _doRegister() {
    this.props.registerUser(
      {Email: this.state.login, Password: this.state.password, ChildBirthday: this.state.date},
      this
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (credentials, component) => {
      registerUser(credentials)
        .then((action) => { dispatch(action); return action; })
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
