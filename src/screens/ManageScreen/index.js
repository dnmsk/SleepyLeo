import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import Styles from '/src/const/styles';
import { sleepNorms } from '/src/actions/DataActions';

function numberToHourMin(num) {
  let hour = Math.floor(num);
  let min = Math.floor(60 * (num - hour));
  if (min == 0) {
    return hour + ' ч';
  }
  return hour + ' ч ' + min + ' мин';
}

class ManageScreen extends Component {
  static navigationOptions = (navigation) => {
    return {
      tabBarLabel: 'Нормы сна',
    };
  }

  constructor(props) {
    super(props);
    this.state = { loading: true }
  }

  componentWillMount() {
    this.props.sleepNorms(this);
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <View>
        <Text style={Styles.Font.H1}>
          Нормы сна
        </Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <Text style={Styles.Font.H3}>
          Вашему ребенку <Text style={Styles.Font.H2}>
            {this.props.norms.ageInMonth} мес {Math.floor(this.props.norms.ageDays)} д
          </Text>
        </Text>
        <Text style={Styles.Font.H5}>
          Нормы сна для текущего возраста
        </Text>
        <Text style={Styles.Font.H6}>
          Время бодрствования
        </Text>
        <Text style={Styles.Font.H4}>
          от {numberToHourMin(this.props.norms.awakeTimeMin)} до {numberToHourMin(this.props.norms.awakeTimeMax)}
        </Text>
        <Text style={Styles.Font.H6}>
          Количество дневных снов:
        </Text>
        <Text style={Styles.Font.H4}>
          от {this.props.norms.daySleepCountMin} до {this.props.norms.daySleepCountMax}
        </Text>
        <Text style={Styles.Font.H6}>
          Время дневных снов в день:
        </Text>
        <Text style={Styles.Font.H4}>
          от {numberToHourMin(this.props.norms.daySleepTimeMin)} до {numberToHourMin(this.props.norms.daySleepTimeMax)}
        </Text>
        <Text style={Styles.Font.H6}>
          Время ночного сна в день:
        </Text>
        <Text style={Styles.Font.H4}>
          от {numberToHourMin(this.props.norms.nightSleepTimeMin)} до {numberToHourMin(this.props.norms.nightSleepTimeMax)}
        </Text>
        <Text style={Styles.Font.H6}>
          Всего сна в день:
        </Text>
        <Text style={Styles.Font.H4}>
          от {numberToHourMin(this.props.norms.wholeSleepTimeMin)} до {numberToHourMin(this.props.norms.wholeSleepTimeMax)}
        </Text>
      </View>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sleepNorms: (component) => {
      sleepNorms()
        .then((action) => {
          dispatch(action);
          return action;
        })
        .then(() => {
          component.setState({ loading: false });
        })
        .catch(console.log);
    }
  }
};

const mapStateToProps = state => {
  return {
    navigationState: state.navigation,
    norms: state.data.norms
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageScreen);
