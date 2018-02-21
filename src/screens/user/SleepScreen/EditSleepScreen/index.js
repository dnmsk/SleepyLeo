import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '/src/const/styles';
import { Container, Content, Left, Body, Right, ListItem } from 'native-base';

import { ButtonPrimary } from '/src/components/Button';
import Center from '/src/components/Center';
import Cross from '/src/components/Cross';
import Hr from '/src/components/Hr';
import Loading from '/src/screens/LoadingScreen/Loading';
import Text from '/src/components/Text';
import WindowTitle from '/src/components/WindowTitle';

import Datepicker from './Datepicker';
import SleepRow from './SleepRow';
import SleepSwitcher from '../SleepSwitcher';
import * as actions from './redux/actions';

class EditSleepScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedRow: undefined,
      loaded: false
    };
  }

  componentDidMount() {
    this._s0 = this.props.navigation.addListener('willFocus', a => { this._onWillFocus(a);});
  }
  componentWillUnmount() {
    this._s0.remove();
  }

  _onWillFocus = a => {
    console.log('_willFocus EditSleepScreen', a);
    this.setState({loaded: false});
    this.props.getSleep((a.state.params || {}).sleepId, () => {
      this.setState({loaded: true});
    })
  };

  _setEditedRow(state) {
    this.setState({
      editedRow: this.state.editedRow == state ? undefined : state
    });
  }

  _setSelectedValue(state, value) {
    let since = state == 'sleep' ? value : this.props.sleep.since;
    let wakeup = state == 'wakeup' ? value : this.props.sleep.wakeup;
    if (since && wakeup) {
      if (since > wakeup) {
        return this.props.showAlert('Ошибка', 'Конец сна не может быть раньше его начала.');
      }
      if (new Date().setDate(since.getDate() + 1) < wakeup) {
        return this.props.showAlert('Ошибка', 'Сон не может быть более суток.');
      }
    }
    this.props.setSleepTime(value, state == 'wakeup');
    if (!Styles.Fn.ios) {
      this.setState({
        editedRow: undefined
      });
    }
  }

  render() {
    const vMargin = Styles.Fn.VerticalPercent(0.04);
    return !this.state.loaded
    ? (<Loading />)
    : (<Container>
        <Content>
          <WindowTitle>
            <Cross Large onPress={() => {this.props.navigateBack();}}
              style={{position: 'absolute', left: '-25%', top: '10%'}} />
            <Text style={[Styles.Font.H3]}>
              { this.props.sleep.id ? 'Изменить сон' : 'Записать сон' }
            </Text>
          </WindowTitle>
          <View style={Styles.Blocks.Screen.Paddings}>
            <View style={{marginTop: 1.6*vMargin}}>
              <SleepSwitcher date={this.props.sleep.since} isDaySleep={this.props.sleep.isDaySleep} onValueChange={ (value)=>{ this.props.setSleepMode(value); }} />
            </View>
            <SleepRow date={this.props.sleep.since} style={{marginTop: vMargin, marginBottom: vMargin}} onPress={() => {this._setEditedRow('sleep');}}>
              Малыш заснул
            </SleepRow>
            {this.state.editedRow == 'sleep'
              && (<Datepicker dateTime={this.props.sleep.since} onDateTimeSelected={(val) => {this._setSelectedValue('sleep', val);}}/>)}
            <Hr/>
            <SleepRow date={this.props.sleep.wakeup} style={{marginTop: vMargin, marginBottom: vMargin}} onPress={() => {this._setEditedRow('wakeup');}}>
              Малыш проснулся
            </SleepRow>
            {this.state.editedRow == 'wakeup'
              && (<Datepicker dateTime={this.props.sleep.wakeup} onDateTimeSelected={(val) => {this._setSelectedValue('wakeup', val);}}/>)}
            <Hr/>
            <Center style={{marginTop: vMargin}}>
              <ButtonPrimary
                onPress={() => { this.props.putSleep(this.props.sleep);}}>
                Сохранить
              </ButtonPrimary>
            </Center>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    sleep: state.my_sleep.edit_sleep
  };
};

export default connect(mapStateToProps, actions)(EditSleepScreen);
