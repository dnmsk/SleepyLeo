import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Right } from 'native-base';

import { openScreen as openEditScreen } from './EditSleepScreen/redux/actions';
import { deleteSleep } from './redux/actions';

import { Styles, Images } from '../../../const/styles';
import Center from '../../../components/Center';
import Hr from '../../../components/Hr';
import Row from '../../../components/Row';
import Text from '../../../components/Text';
import Sleep from '../../../blocks/Sleep';

class TodaySleeps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'all'
    };
  }

  setActive(state) {
    this.setState({active: state});
  }

  render() {
    let sleeps = [];
    if (this.state.active == 'day') {
      sleeps = this.props.sleeps.filter(val => !val.isNightSleep);
    } else if (this.state.active == 'night') {
      sleeps = this.props.sleeps.filter(val => val.isNightSleep);
    } else {
      sleeps = this.props.sleeps;
    }

    return (<View style={{marginTop: 1.5*this.props.vMargin}}>
      <Row style={{marginBottom: 0.5 * this.props.vMargin}}>
        <View style={{width: Styles.Fn.HorizontalPercent(0.15)}}>
          <Image source={Images.Screen.Sleep.TodaySleeps.Moon}
            style={{ height: 20, width: 20, resizeMode: 'contain' }} />
        </View>
        <View style={{width: Styles.Fn.HorizontalPercent(0.58)}}>
          <Center>
            <Text style={[Styles.Font.Info, Styles.Font.H6, Styles.Font.Inactive]}>
              { this.props.childName } спал
            </Text>
          </Center>
        </View>
        <View style={{width: Styles.Fn.HorizontalPercent(0.15)}}>
          <Right>
            <Image source={Images.Screen.Sleep.TodaySleeps.Sun}
              style={{ height: 20, width: 20, resizeMode: 'contain' }} />
          </Right>
        </View>
      </Row>
      <Hr />
      <Row style={{marginTop: 0.5 * this.props.vMargin, marginBottom: 0.5 * this.props.vMargin}}>
        <View style={{width: Styles.Fn.HorizontalPercent(0.3)}}>
          <Text
            onPress={() => { this.setActive('night'); }}
            style={[Styles.Font.Info, this.state.active == 'night' ? {} : [Styles.Font.Inactive, {textDecorationLine: 'underline'}]]}>
            Ночью
          </Text>
        </View>
        <View style={{width: Styles.Fn.HorizontalPercent(0.3)}}>
          <Text
            onPress={() => { this.setActive('day'); }}
            style={[Styles.Font.Info, this.state.active == 'day' ? {} : [Styles.Font.Inactive, {textDecorationLine: 'underline'}]]}>
            Днем
          </Text>
        </View>
        <Right>
          <Text
            onPress={() => { this.setActive('all'); }}
            style={[Styles.Font.Info, this.state.active == 'all' ? {} : [Styles.Font.Inactive, {textDecorationLine: 'underline'}]]}>
            Весь день
          </Text>
        </Right>
      </Row>
      <Hr style={{marginBottom: 0.5 * this.props.vMargin}} />
      {sleeps.map((val, index) => {
        return (
          <Sleep
            key={index}
            onSleepPress={this.props.openEditScreen}
            deleteSleep={this.props.deleteSleep}
            sleep={val} />
        );
      })}
    </View>);
  }
}

export default connect(undefined, { openEditScreen, deleteSleep })(TodaySleeps);
