import React, { Component } from 'react';
import { View, ScrollView, Image, Linking } from 'react-native';
import { Container, Header, Left, Right, Content} from 'native-base';
import { ButtonPrimary, ButtonSlave } from '../../components/Button';
//import I18n from 'app/i18n/i18n';
import { Styles, Images } from '../../const/styles';
import Center from '../../components/Center';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

class DefaultScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Center>
            <Text style={[Styles.Font.H1, {marginTop: Styles.Fn.VerticalPercent(0.15)}]}>
              SleepyLeo
            </Text>
            <Image style={[Styles.Blocks.LogoImage, {marginTop: Styles.Fn.VerticalPercent(0.05)}]} source={Images.Logo}/>
            <ButtonPrimary
              containerStyle={{marginTop: Styles.Fn.VerticalPercent(0.15)}}
              onPress={() => this.props.navigation.navigate('DefaultLogin')}>
              Войти
            </ButtonPrimary>
            <ButtonSlave
              containerStyle={{marginTop: Styles.Fn.VerticalPercent(0.05)}}
              onPress={() => this.props.navigation.navigate('DefaultRegister')}>
              Регистрация
            </ButtonSlave>
          </Center>
        </Content>

        <Footer style={[Styles.Blocks.Footer]}>
          {false && <Left style={Styles.Blocks.Screen.Default.FooterText.Left}>
            <Text onPress={() => { Linking.openURL(''); }}>
              Забыли пароль?
            </Text>
          </Left>}
          <Right style={Styles.Blocks.Screen.Default.FooterText.Right}>
            <Text onPress={() => { Linking.openURL('https://sleepyleo.answerdesk.io/'); }}>
              Служба поддержки
            </Text>
          </Right>
        </Footer>
      </Container>
    );
  }
}

export default DefaultScreen;
