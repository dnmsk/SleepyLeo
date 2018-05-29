import React from 'react';
import { Image, View } from 'react-native';
import { Images, Styles } from '../../const/styles';

import Br from '../Br';
import Center from '../Center';
import Row from '../Row';
import Text from '../Text';

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
