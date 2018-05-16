import { StackNavigator } from 'react-navigation';
import { Stylesheet } from 'react-native';

import AboutScreen from '../screens/AboutScreen';
import DefaultScreen from '../screens/DefaultScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Styles } from '../const/styles';

const DefaultNavigation = StackNavigator({
  DefaultRoot: {
    screen: DefaultScreen
  },
  DefaultAbout: {
    screen: AboutScreen
  },
  DefaultLogin: {
    screen: LoginScreen
  },
  DefaultRegister: {
    screen: RegisterScreen
  }
},
  {
    initialRouteName: 'DefaultRoot',
    headerMode: 'none',
    cardStyle: Styles.Navigation.CardStyle,
    transitionConfig: () => ({
      containerStyle: {
      }
    })
  }
);

export default DefaultNavigation;
