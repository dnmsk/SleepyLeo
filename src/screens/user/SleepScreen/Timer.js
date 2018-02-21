import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import * as baseFunctions from '/src/actions/base';

import { Images, Styles } from '/src/const/styles';
import { toTimeString, toUTCTimeString } from '/src/functions/date';
import Center from '/src/components/Center';
import Row from '/src/components/Row';
import Text from '/src/components/Text';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this._updateTimer();
  }
  componentWillUnmount() {
    this._isUnmount = true;
  }

  _updateTimer() {
    setTimeout(() => {
      if (!this._isUnmount) {
        this.setState({
          time: new Date()
        });
        this._updateTimer(); 
      }
    }, 1000);
  }

  render() {
    const timerLaunched = this.props.since !== undefined;
    const sleepTime = new Date((this.state.time - this.props.since));
    return (
      <View>
        <Center>
          <Row>
            <Text style={[
              Styles.Font.Info,
              { fontSize: Styles.Font.H1.fontSize } ]}>
              {toTimeString(this.state.time, 'minutes')}
            </Text>
            { !timerLaunched &&
              (<TouchableOpacity
                onPress={() => {this.props.navigateTo('EditSleep');}}>
                <Image source={Images.Screen.Sleep.DatePicker}
                  style={{ marginLeft: 10, marginTop: -5, height: 60, width: 60, resizeMode: 'contain' }} />
              </TouchableOpacity>)
            }
          </Row>
        </Center>
        {
          this.props.since
            ? (
                <Center style={{ marginTop: 0 }}>
                  <Text style={[Styles.Font.InfoOrange, { fontSize: Styles.Font.H2.fontSize }]}>
                    {toUTCTimeString(sleepTime)}
                  </Text>
                </Center>
              )
            : (
                <Center style={[Styles.Blocks.Row, {marginLeft: 80, marginTop: 10}]}>
                  <Text style={Styles.Font.InfoOrange} onPress={() => {this.props.navigateTo('EditSleep');}}>
                    Добавить предыдущий сон
                  </Text>
                  <Image
                    style={{width: 75, height: 62, marginLeft: -30, marginTop: -70}}
                    source={Images.Screen.Sleep.Arrow.OrangeLeftUp}/>
                </Center>
              )
        }
        
      </View>
    );
  }
}

export default connect(undefined, baseFunctions)(Timer);
