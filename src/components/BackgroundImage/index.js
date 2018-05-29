import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Styles } from '../../const/styles';

class BackgroundImage extends React.Component {
  render() {
    const {children, style, imageStyle, imageSource, ...props} = this.props;
    const demensions = {
      width: style.width || '100%',
      height: style.height || '100%'
    };
    return (
      <View style={style}>
        <Image
          style={[
            StyleSheet.absoluteFill,
            demensions,
            imageStyle,
          ]}
          resizeMethod='resize'
          source={imageSource}
        />
        { children }
      </View>
    );
  }
};

export default BackgroundImage;
