import React from 'react';
import { Image, View } from 'react-native';
import { Styles } from '../../const/styles';

import Center from '../Center';
import Row from '../Row';
import Text from '../Text';

class Avatar extends React.Component {
  render() {
    return (
      <Image
        style={[
          Styles.Blocks.Avatar.Container,
          this.props.style,
        ]}
        resizeMethod={this.props.resizeMethod}
        source={this.props.source}
      />
    );
  }
}

export default Avatar;
