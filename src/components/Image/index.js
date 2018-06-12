import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../const/styles';

import Center from '../Center';
import Row from '../Row';
import Text from '../Text';

class Image extends React.Component {
  render() {
    return (
      <Image
        style={[
          this.props.style,
        ]}
        resizeMethod={this.props.resizeMethod || 'contain'}
        source={this.props.source}
      />
    );
  }
}

export default Image;
