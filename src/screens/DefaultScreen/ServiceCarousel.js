import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import Styles from '/src/const/styles';

export default class ServiceCarousel extends Component {
  _renderItem ({item, index}) {
    return (
      <View style={Styles.Default.Carousel.item}>
        <Text style={Styles.Font.H5}>{ item.title }</Text>
        <Text style={Styles.Font.H6}>{ item.text }</Text>
      </View>
    );
  }

  render () {
    return (
      <View style={Styles.Default.Carousel.Container}>
        <Carousel
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={Styles.Default.Carousel.sliderWidth}
          itemWidth={Styles.Default.Carousel.item.width}
        />
      </View>
    );
  }
}
