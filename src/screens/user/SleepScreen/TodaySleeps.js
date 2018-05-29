import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Left, Body, Right } from 'native-base';

import { openScreen as openEditScreen } from './EditSleepScreen/redux/actions';
import { deleteSleep } from './redux/actions';

import { numberToHourMin, toTimeString } from '../../../functions/date';
import { Styles, Images } from '../../../const/styles';
import Center from '../../../components/Center';
import Cross from '../../../components/Cross';
import Hr from '../../../components/Hr';
import Row from '../../../components/Row';
import Text from '../../../components/Text';

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
          <View key={index} style={{marginBottom: 10}}>
          {
            val.parts 
              ? <Row>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.3)}}>
                    <Text
                      style={Styles.Font.Info}>
                      {numberToHourMin(val.timeInHours)}
                    </Text>
                  </View>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.5)}}>
                    <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
                      <Text
                        style={[Styles.Font.Info]}>
                        c {toTimeString(val.goToSleepTime, 'minutes')} до {toTimeString(val.awakeTime, 'minutes')}
                      </Text>
                    </View>
                    {val.parts.map((part, idx) => {
                      return <Row key={idx}>
                        <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
                          <Text
                            style={[Styles.Font.Info, Styles.Font.Inactive, {textDecorationLine: 'underline'}]}
                            onPress={() => {this.props.openEditScreen(part);}}>
                            c {toTimeString(part.goToSleepTime, 'minutes')} до {toTimeString(part.awakeTime, 'minutes')}
                          </Text>
                        </View>
                        <View style={{width: Styles.Fn.HorizontalPercent(0.1)}}>
                          <Right>
                            <Cross Yellow onPress={() => { this.props.deleteSleep(part); }} />
                          </Right>
                        </View>
                      </Row>
                    })}
                  </View>
                </Row>
              : <Row>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.3)}}>
                    <Text
                      style={Styles.Font.Info}>
                      {numberToHourMin(val.timeInHours)}
                    </Text>
                  </View>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.45)}}>
                    <Text
                      style={[Styles.Font.Info, {textDecorationLine: 'underline'}]}
                      onPress={() => {this.props.openEditScreen(val);}}>
                      c {toTimeString(val.goToSleepTime, 'minutes')} до {toTimeString(val.awakeTime, 'minutes')}
                    </Text>
                  </View>
                  <View style={{width: Styles.Fn.HorizontalPercent(0.1)}}>
                    <Right>
                      <Cross Yellow onPress={() => { this.props.deleteSleep(val); }} />
                    </Right>
                  </View>
                </Row>
          }
          </View>
        );
      })}
    </View>);
  }
}

export default connect(undefined, { openEditScreen, deleteSleep })(TodaySleeps);
