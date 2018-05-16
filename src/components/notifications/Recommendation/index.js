import React from 'react';
import { Image, View } from 'react-native';
import { Images, Styles } from '/src/const/styles';

import Center from '/src/components/Center';
import Row from '/src/components/Row';
import Text from '/src/components/Text';

export default class Recommendation extends React.Component {
  render() {
    return this.props.text
      ? <View
          style={[
            Styles.Blocks.Recommendation,
            Styles.Blocks.VerticalMiddle
          ]}>
          <Row>
            <Image source={Images.Components.Notifications.Recommendation}
              style={{ height: 20, width: 20, marginRight: 10, resizeMode: 'contain' }} />
            <Text style={Styles.Font.Info}>{this.props.text}</Text>
          </Row>
        </View>
      : null;
  }
}
