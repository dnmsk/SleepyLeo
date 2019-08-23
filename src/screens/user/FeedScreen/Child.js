import React from 'react';
import { Styles } from '../../../const/styles';

import Avatar from '../../../components/Image/Avatar';
import Row from '../../../components/Row';
import Text from '../../../components/Text';

class Child extends React.Component {
  render() {
    return (
      <Row>
        <Avatar source={{uri: this.props.child.childAvatarUrl}} />
        <Text style={Styles.Font.Bold}>
          {this.props.child.childName}{'\n'}({this.props.child.childAge})
        </Text>
      </Row>
    );
  }
}

export default Child;
