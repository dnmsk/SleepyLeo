import React from 'react';
import { Image, View } from 'react-native';
import { Images, Styles } from '/src/const/styles';

import Br from '/src/components/Br';
import Center from '/src/components/Center';
import Row from '/src/components/Row';
import Text from '/src/components/Text';

export default class Layout extends React.Component {
  render() {
    return <View style={Styles.Blocks.Notifications.Layout}>
      <View style={Styles.Blocks.Notifications.Container}>
        <View style={Styles.Blocks.Notifications.MessageContainer}>
          { !!this.props.header && <View>
            <Center>
              <Text style={[Styles.Font.InfoDarkBlue, Styles.Font.Bold, Styles.Font.H6]}>
                {this.props.header}
              </Text>
            </Center>
            <Br />
          </View>}
          { !!this.props.body && <View>
            <Text style={[Styles.Font.InfoBlack]}>
              {this.props.body}
            </Text>
            <Br />
          </View>}
          {this.props.children}
        </View>
      </View>
    </View>
  }
}
