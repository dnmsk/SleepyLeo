import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem } from 'native-base';

import * as sleepActions from './redux/actions';

import { Styles, Images } from '../../../const/styles';
import { ButtonPrimary } from '../../../components/Button';
import Loading from '../../../screens/LoadingScreen/Loading';
import Wait from '../../../screens/LoadingScreen/Wait';
import Center from '../../../components/Center';
import Hr from '../../../components/Hr';
import Text from '../../../components/Text';
import Row from '../../../components/Row';
import Recommendation from '../../../components/notifications/Recommendation';
import WindowTitle from '../../../components/WindowTitle';

import ButtonHint from './ButtonHint';
import SleepSwitcher from './SleepSwitcher';
import Timer from './Timer';
import TodaySleeps from './TodaySleeps';

class SleepScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSleepLoaded: false,
      sleepsLoaded: false,
      buttonSleepProcess: false
    };
  }

  _sleepButtonPressed() {
    if (this.state.buttonSleepProcess) {
      return;
    }
    this.setState({buttonSleepProcess: true});

    this.props.userButtonSleepPressed(this.props.sleep, () => {
      this.setState({buttonSleepProcess: false});
      this.props.getRecommendations();

      //if (this.props.sleep.since) {
        this.setState({sleepsLoaded: false});
        this.props.getSleeps(() => {
          this.setState({sleepsLoaded: true});
        });
      //}
    });
  }

  componentWillMount() {
    this.props.schedulePeriodicalTask(this.props.getRecommendations, 5 * 60 * 1000);
    this.props.getRecommendations();
    this.props.getSleeps(() => {
      this.setState({sleepsLoaded: true});
    });
    this.props.getLastSleep(() => {
      this.setState({lastSleepLoaded: true});
    });
  }

  render() {
    const childName = this.props.profile.childName || 'Малыш';
    const hPadding = Styles.Fn.HorizontalPercent(0.065);
    const vMargin = Styles.Fn.VerticalPercent(0.035);
    return !this.state.lastSleepLoaded
      ? (<Loading />)
      : (
      <Container>
        <Content>
          <WindowTitle>
            <Text style={[Styles.Font.H3]}>
              Добавить сон
            </Text>
          </WindowTitle>
          <Recommendation text={this.props.sleep.recommendations} />

          <View style={Styles.Blocks.Screen.Paddings}>
            <View style={{marginTop: 1.6*vMargin}}>
              <SleepSwitcher date={new Date()} isDaySleep={this.props.sleep.isDaySleep} enabled={this.props.sleep.since === undefined} onValueChange={ (value)=>{ this.props.setSleepMode(value); }} />
            </View>
            <Hr style={{marginTop: vMargin }} />
            <Text style={[Styles.Font.H2, { textAlign: 'center', marginTop: vMargin }]}>
              {childName} { this.props.sleep.since ? 'спит' : 'еще не спит?' }
            </Text>
            <View style={{marginTop: vMargin}}>
              <Timer since={this.props.sleep.since} sleepId={this.props.sleep.id} dispatch={this.props.dispatch} />
            </View>
            <Center style={{marginTop: vMargin}}>
              <ButtonPrimary onPress={() => { this._sleepButtonPressed(); }}>
                { this.props.sleep.since ? 'Проснулся' : 'Заснул' }
              </ButtonPrimary>
            </Center>
            { this.state.sleepsLoaded 
              ? (<View>
                  { this.props.today.sleeps.length
                    ? (<TodaySleeps childName={childName} vMargin={vMargin} sleeps={this.props.today.sleeps} />)
                    : (<ButtonHint since={this.props.sleep.since}/>)
                  }
                </View>)
              : (<Wait />)}
            
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    sleep: state.my_sleep.current,
    today: state.my_sleep.today
  };
};

export default connect(mapStateToProps, sleepActions)(SleepScreen);
