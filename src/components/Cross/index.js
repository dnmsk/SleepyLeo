import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { Images, Styles } from '/src/const/styles';
import { if_prop_present } from '/src/functions/component';

const color_map = {
  Default: Images.Components.Cross.White,
  Yellow: Images.Components.Cross.Yellow,
  White: Images.Components.Cross.White,
};

const size_map = {
  Default: Styles.Blocks.Cross.Regular,
  Large: Styles.Blocks.Cross.Large,
  Regular: Styles.Blocks.Cross.Regular,
};

class Cross extends React.Component {
  render() {
    return <View style={this.props.style}>
      <TouchableOpacity
        onPress={() => {this.props.onPress && this.props.onPress();}}>
        <Image source={if_prop_present(this.props, color_map)}
          style={[Styles.Blocks.Cross.Default, if_prop_present(this.props, size_map)]} />
      </TouchableOpacity>
    </View>;
  }
}

export default Cross;
