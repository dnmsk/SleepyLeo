import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { Styles } from '../../const/styles';

class AboutScreen extends Component {
  static navigationOptions = {
    title: 'О нас',
  }

  render() {
    return (
      <View>
        <Text style={Styles.Font.H1}>
          Ваш малыш может спать лучше!
        </Text>
        <Text style={Styles.Font.H3}>
          Ребенок плохо спит
        </Text>
        <Text>
          Короткие дневные сны, беспокойные ночи, плохое настроение мамы и капризы малыша? Причина может быть в нефизиологичном режиме сна и бодрствования. Даем рекомендации, когда уложить ребенка спать, чтобы он не переутомлялся, и укладывание проходило легче.
        </Text>
      </View>

    );
  }
}

export default AboutScreen;
