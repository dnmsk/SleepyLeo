import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Left, Right } from 'native-base';
import { ScrollView, View } from 'react-native';
import { numberToHourMin } from '../../../functions/date';
import { Styles } from '../../../const/styles';
import Loading from '../../../screens/LoadingScreen/Loading';
import { sleepNorms } from '../../../actions/DataActions';

import Br from '../../../components/Br';
import Center from '../../../components/Center';
import Row from '../../../components/Row';
import Text from '../../../components/Text';
import WindowTitle from '../../../components/WindowTitle';

class ManageScreen extends Component {
  static navigationOptions = (navigation) => {
    return {
      tabBarLabel: 'Нормы сна',
    };
  }

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.sleepNorms(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }
    const paddingHorizontal = Styles.Fn.HorizontalPercent(0.1);
    return (
      <Container>
        <Content>
          <WindowTitle>
            <Text style={[Styles.Font.H3]}>
              Нормы сна
            </Text>
          </WindowTitle>
          <View style={[Styles.Blocks.VerticalMiddle, Styles.Blocks.Screen.Paddings]}>
            <Br />
            <Row>
              <Left><Text>Вашему ребенку</Text></Left>
              <Right><Text>{this.props.norms.ageInMonth} мес {Math.floor(this.props.norms.ageDays)} д</Text></Right>
            </Row>
            <Br />
            <Text style={[Styles.Font.H5]}>
              Нормы сна для текущего возраста
            </Text>
            <Br />
            <Row>
              <Left>
                <Text>
                  Время{'\n'}бодрствования
                </Text>
              </Left>
              <Right>
                <Text>
                  от {numberToHourMin(this.props.norms.awakeTimeMin)} {'\n'}
                  до {numberToHourMin(this.props.norms.awakeTimeMax)}
                </Text>
              </Right>
            </Row>
            <Br />
            <Row>
              <Left>
                <Text>
                  Количество дневных снов:
                </Text>
              </Left>
              <Right>
                <Text>
                  от {this.props.norms.daySleepCountMin} до {this.props.norms.daySleepCountMax}
                </Text>
              </Right>
            </Row>
            <Br />
            <Row>
              <Left>
                <Text>
                  Время дневных снов в день:
                </Text>
              </Left>
              <Right>
                <Text>
                  от {numberToHourMin(this.props.norms.daySleepTimeMin)} до {numberToHourMin(this.props.norms.daySleepTimeMax)}
                </Text>
              </Right>
            </Row>
            <Br />
            <Row>
              <Left>
                <Text>
                  Время ночного сна в день:
                </Text>
              </Left>
              <Right>
                <Text>
                  от {numberToHourMin(this.props.norms.nightSleepTimeMin)} до {numberToHourMin(this.props.norms.nightSleepTimeMax)}
                </Text>
              </Right>
            </Row>
            <Br />
            <Row>
              <Left>
                <Text>
                  Всего сна в день:
                </Text>
              </Left>
              <Right>
                <Text>
                  от {numberToHourMin(this.props.norms.wholeSleepTimeMin)} до {numberToHourMin(this.props.norms.wholeSleepTimeMax)}
                </Text>
              </Right>
            </Row>
          </View>


        </Content>
      </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.navigation,
    norms: state.data.norms
  };
};

export default connect(mapStateToProps, {sleepNorms})(ManageScreen);
