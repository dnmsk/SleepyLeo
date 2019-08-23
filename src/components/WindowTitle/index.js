import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../const/styles';

import Center from '../Center';
import Row from '../Row';
import Text from '../Text';

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
