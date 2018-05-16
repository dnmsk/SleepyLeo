import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Images, Styles } from '/src/const/styles';
import Center from '/src/components/Center';
import Text from '/src/components/Text';

export default class ButtonHint extends Component {
  render() {
    return (<Center style={{marginLeft: -100, marginTop: 100}}>
        <View style={{position: 'absolute', top: 0, left: '50%', width: 1}}>
          <Image
            style={{position: 'absolute', left: -120, top: -130, width: 65, height: 180, resizeMode: 'contain'}}
            source={Images.Screen.Sleep.Arrow.BlueLeftUp}/>
          <Image
            style={{position: 'absolute', left: 40, top: -75, width: 20, height: 60, resizeMode: 'contain'}}
            source={Images.Screen.Sleep.Arrow.BlueBottomTop}/>
        </View>
        { this.props.since
          ? (<Text style={Styles.Font.InfoBlue}>
                Малыш проснулся?{"\n"}
                Нажми кнопку и{"\n"}
                сон сохранится
              </Text>)
          : (<Text style={Styles.Font.InfoBlue}>
                Малыш заснул?{"\n"}
                Нажми кнопку и начни{"\n"}
                записывать сон
              </Text>)}
      </Center>
    );
  }
}
