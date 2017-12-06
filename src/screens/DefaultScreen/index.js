import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Button from 'react-native-button';
//import I18n from 'app/i18n/i18n';
import Styles from '/src/const/styles';
import ServiceCarousel from './ServiceCarousel';
//import { Card, Button, Icon } from 'react-native-elements';

const carouselData = [
  {
    title: 'Выстраивает режим дня',
    text: 'Дает рекомендации по времени укладывания и количеству снов в соответствии с возрастом ребенка'
  },
  {
    title: 'Растет вместе с вашим малышом',
    text: 'Сервис подойдет для детей от 0 до 2+ лет. Нормы бодрствования и сна постоянно меняются и мы это учитываем'
  },
  {
    title: 'Ведет статистику',
    text: 'Каждый день собираем статистику по снам малыша и даем оценку качеству сна. Смотрите, как дети спят у других мам'
  },
];

class DefaultScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      //header: null,//<View></View>,
      headerLeft: (
        <Text
          onPress={() => { navigation.navigate('DefaultAbout'); }}
          textDecorationLine={"underline"}>
          О нас
        </Text>
      ),
      headerRight: (
        <Button
          style={Styles.Button.Primary.Style}
          containerStyle={Styles.Button.Primary.ContainerStyle}
          onPress={() => { navigation.navigate('DefaultLogin'); }}>
          Войти
        </Button>
      )
    }
  };

  render() {
    return (
        <View>
          <Text style={Styles.Font.H4}>
            Зачем Вам SleepyLeo
          </Text>
          <Text style={Styles.Font.H6}>
            Начните налаживать сон вашего малыша уже сегодня. С нами это легко: укажите только возраст малыша и получайте рекомендации по сну. Это совершенно бесплатно.
          </Text>
          <ServiceCarousel data={carouselData}/>
          <Button
            style={Styles.Button.Primary.Style}
            containerStyle={Styles.Button.Primary.ContainerStyle}
            onPress={this.toRegisterScreen}>
            Регистрация
          </Button>
        </View>

    );
  }

  toRegisterScreen = () => {
    this.props.navigation.navigate('DefaultRegister');
  }
}

export default DefaultScreen;
