import { StackNavigator } from 'react-navigation';
import DefaultNavigation from './DefaultNavigation';
import UserNavigation from './UserNavigation';
import LoadingScreen from '/src/screens/LoadingScreen';

const AppNavigator = StackNavigator({
  User: {
    screen: UserNavigation
  },
  Default: {
    screen: DefaultNavigation
  },
  Loading: {
    screen: LoadingScreen
  }
}, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: 'Loading',
  cardStyle: {
    backgroundColor: 'transparent'
  },
  transitionConfig: () => ({
    containerStyle: {
    }
  })
});

export default AppNavigator;
