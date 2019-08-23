import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import { Styles } from '../../../const/styles';
import { dateIsEqual, toDateString } from '../../../functions/date';

import * as feedActions from './redux/actions';
import { deleteSleep } from '../SleepScreen/redux/actions';
import { openScreen as openEditScreen } from '../SleepScreen/EditSleepScreen/redux/actions';

import Br from '../../../components/Br';
import Hr from '../../../components/Hr';
import Loading from '../../../screens/LoadingScreen/Loading';
import Switcher from '../../../components/Switcher';
import Text from '../../../components/Text';
import WindowTitle from '../../../components/WindowTitle';

import Child from './Child';
import DateComponent from './Date';
import Sleep from './Sleep';


const SLEEPS_ORDER = {
  daySummary: false,
  nightSummary: true
};

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      onlyMySleeps: false
    };
  }

  componentWillMount() {
    this._loadSleeps();
  }

  _changeMode(onlyMySleeps) {
    this.setState({loading: true, onlyMySleeps});
    this._load_sleeps_int(onlyMySleeps);
  }

  _loadSleeps(page) {
    this._load_sleeps_int(this.state.onlyMySleeps, page);
  }

  _load_sleeps_int(onlyMySleeps, page=1) {
    this.props.getSleeps(onlyMySleeps, page, () => {
      this.setState({loading: false, page});
    });    
  }

  render() {
    const hPadding = Styles.Fn.HorizontalPercent(0.065);
    const vMargin = Styles.Fn.VerticalPercent(0.035);
    let currentDate = null;
    return this.state.loading
      ? (<Loading />)
      : (<Container>
      <Content>
        <WindowTitle>
          <Text style={[Styles.Font.H3]}>
            Лента снов
          </Text>
        </WindowTitle>
        <View style={Styles.Blocks.Screen.Paddings}>
          <View style={{marginTop: 1*vMargin}}>
            <Switcher
              left={'Мой малыш'}
              right={'Все малыши'}
              active={!this.state.onlyMySleeps}
              onValueChange={value => this._changeMode(value)}
            />
            {this.props.sleeps.map((child_sleep_for_date, index) => {
              const dateChanged = !dateIsEqual(currentDate, child_sleep_for_date.forDate);
              if (dateChanged) { currentDate = child_sleep_for_date.forDate; }
              return (<View key={index}>
                <Br />
                { dateChanged && <DateComponent value={currentDate} /> }
                { !this.state.onlyMySleeps && <View>
                    <Br />
                    <Child child={child_sleep_for_date} />
                  </View> }
                { Object.keys(SLEEPS_ORDER).map((idx) => {
                  const val = SLEEPS_ORDER[idx];
                  const sleepsToRender = child_sleep_for_date.sleeps
                    .filter(sleep => sleep.isNightSleep == val)
                  return sleepsToRender.length > 0 
                    ? (<Sleep
                        key={idx}
                        sleepType={idx}
                        onlyMySleeps={this.state.onlyMySleeps}
                        sleepsToRender={sleepsToRender}
                        message={child_sleep_for_date[idx]}
                        openEditScreen={this.props.openEditScreen}
                        deleteSleep={this.props.deleteSleep}
                      />)
                    : null;
                })}
              </View>);
            })}
          </View>
        </View>
      </Content>
    </Container>);
  }
}

const mapStateToProps = state => {
  return {
    sleeps: state.feed.sleeps
  };
};

export default connect(mapStateToProps, {...feedActions, deleteSleep, openEditScreen})(FeedScreen);
