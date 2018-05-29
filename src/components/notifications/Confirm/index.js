import React from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Left, Right } from 'native-base';

import { Images, Styles } from '../../../const/styles';

import Center from '../../../components/Center';
import Row from '../../../components/Row';
import Text from '../../../components/Text';

import Layout from '../Layout';
import { closeConfirm } from '../redux/actions';

class Confirm extends React.Component {
  render() {
    return !this.props.confirm.hidden &&
      <Layout header={this.props.confirm.title} body={this.props.confirm.message}>
        <Row style={{marginTop: 5}}>
          <Left>
            <Text style={[{marginLeft: Styles.Fn.HorizontalPercent(0.1)},
              Styles.Font.InfoOrange, Styles.Font.Underline]}
              onPress={() => { this.props.closeConfirm(this.props.confirm.successFunction); }}>
              {this.props.confirm.confirmText || 'Да' }
            </Text>
          </Left>
          <Right>
            <Text style={[{marginRight: Styles.Fn.HorizontalPercent(0.1)},
              Styles.Font.InfoBlack, Styles.Font.Underline]}
              onPress={() => { this.props.closeConfirm(); }}>
              Отмена
            </Text>
          </Right>
        </Row>
      </Layout>;
  }
}

const mapStateToProps = state => {
  return {
    confirm: state.notifications.confirm
  };
};

export default connect(mapStateToProps, {closeConfirm})(Confirm);
