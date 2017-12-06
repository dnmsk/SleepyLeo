import { StackNavigator, TabNavigator } from 'react-navigation';
import { Stylesheet } from 'react-native';

import DairyScreen from '/src/screens/DairyScreen';
import ManageScreen from '/src/screens/ManageScreen';
import ProfileScreen from '/src/screens/ProfileScreen';

const UserNavigation = TabNavigator({
    UserRoot: {
      screen: DairyScreen
    },
    UserManage: {
      screen: ManageScreen
    },
    UserProfile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'UserManage',
    tabBarPosition: 'bottom'
  });

export default UserNavigation;
