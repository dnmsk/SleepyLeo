import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Left, Right } from 'native-base';
import { connect } from 'react-redux';
import { Styles } from '/src/const/styles';
import { logoutUser } from '/src/actions/UserActions';
import { parseInCurrentTZ, toDateString } from '/src/functions/date';

import Br from '/src/components/Br';
import Center from '/src/components/Center';
import Row from '/src/components/Row';
import Text from '/src/components/Text';
import { ButtonPrimary } from '/src/components/Button';
import WindowTitle from '/src/components/WindowTitle';

class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <WindowTitle>
            <Text style={[Styles.Font.H3]}>
              Настройки профиля
            </Text>
          </WindowTitle>

          <View style={Styles.Blocks.Screen.Paddings}>
            <Br/>
            <Row>
              <Left><Text>Пользователь</Text></Left><Right><Text>{this.props.profile.userName}</Text></Right>
            </Row>
            <Br/>
            <Row>
              <Left><Text>Email</Text></Left><Right><Text>{this.props.profile.email}</Text></Right>
            </Row>
            <Br/>
            {this.props.profile.childName && <View>
              <Row>
                <Left><Text>Малыша зовут</Text></Left><Right><Text>{this.props.profile.childName}</Text></Right>
              </Row>
              <Br />
            </View>}
            {this.props.profile.childBirthday && <View>
              <Row>
                <Left><Text>Дата рождения</Text></Left><Right><Text>{toDateString(parseInCurrentTZ(this.props.profile.childBirthday))}</Text></Right>
              </Row>
              <Br />
            </View>}
            <Center>
              <ButtonPrimary
                style={Styles.Button.Default.Style}
                containerStyle={Styles.Button.Default.Container}
                onPress={ () => { this._doExit(); }}>
                Выход
              </ButtonPrimary>
            </Center>
          </View>
        </Content>
      </Container>
    );
  }
  _doExit = () => {
    this.props.logoutUser();
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    user: state.user
  };
};

export default connect(mapStateToProps, {logoutUser})(ProfileScreen);
