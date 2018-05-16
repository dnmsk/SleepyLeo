import React from 'react';
import { View } from 'react-native';
import { Styles } from '/src/const/styles';

import Center from '/src/components/Center';
import Row from '/src/components/Row';
import Text from '/src/components/Text';

class WindowTitle extends React.Component {
  render() {
    return (
      <View
        style={[
          Styles.Blocks.WindowTitle,
          Styles.Blocks.VerticalMiddle
        ]}>
        <Center>
          <Row>
            { this.props.children }
          </Row>
        </Center>
      </View>
    );
  }
}

export default WindowTitle;
