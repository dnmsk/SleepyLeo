import React from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Left, Right } from 'native-base';

import { Images, Styles } from '/src/const/styles';

import Center from '/src/components/Center';
import Row from '/src/components/Row';
import Text from '/src/components/Text';

import Layout from '../Layout';
import { closeAlert } from '../redux/actions';

class Alert extends React.Component {
  render() {
    return !this.props.alert.hidden &&
      <Layout header={this.props.alert.title} body={this.props.alert.message}>
        <Row style={{marginTop: 15}}>
          <Right>
            <Text style={[{marginRight: Styles.Fn.HorizontalPercent(0.1)},
              Styles.Font.InfoOrange, Styles.Font.Underline]}
              onPress={() => { this.props.closeAlert(); }}>
              Закрыть
            </Text>
          </Right>
        </Row>
      </Layout>;
  }
}

const mapStateToProps = state => {
  return {
    alert: state.notifications.alert
  };
};

export default connect(mapStateToProps, {closeAlert})(Alert);
