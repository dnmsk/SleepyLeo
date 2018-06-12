import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Image, View } from 'react-native';

import AlertScreen from '../screens/user/AlertScreen';
import FavouriteScreen from '../screens/user/FavouriteScreen';
import FeedScreen from '../screens/user/FeedScreen';
import InfoScreen from '../screens/user/InfoScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import SleepScreen from '../screens/user/SleepScreen';
import EditSleepScreen from '../screens/user/SleepScreen/EditSleepScreen';

import { Styles, Images } from '../const/styles';

const buildIcon = function(src, focused) {
  return (
    <View style={[
        Styles.Navigation.UserTab.IconShadow,
        focused ? Styles.Navigation.UserTab.IconShadowActive : {}
      ]}>
      <Image
        style={ Styles.Navigation.UserTab.Icon }
        source={src}
      />
    </View>
  );
};

const SleepNavigation = StackNavigator({
    DefaultSleep: {
      screen: SleepScreen
    },
    EditSleep: {
      screen: EditSleepScreen
    }
  },
  {
    initialRouteName: 'DefaultSleep',
    headerMode: 'none',
    cardStyle: Styles.Navigation.CardStyle,
    transitionConfig: () => ({
      containerStyle: {
      }
    }),
    navigationOptions: {
      gesturesEnabled: true
    }
  });

const UserNavigation = TabNavigator({
    UserRoot: {
      screen: SleepNavigation,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return buildIcon(Images.Navigation.User.Sleep, focused);
        }
      }
    },
    UserFeed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return buildIcon(Images.Navigation.User.Favourite, focused);
        }
      }
    },/** /
    UserFavourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return buildIcon(Images.Navigation.User.Favourite, focused);
        }
      }
    },/**/
    UserInfo: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return buildIcon(Images.Navigation.User.Info, focused);
        }
      }
    },/** /
    UserAlert: {
      screen: AlertScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return buildIcon(Images.Navigation.User.Alert, focused);
        }
      }
    },/**/
    UserProfile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return buildIcon(Images.Navigation.User.Profile, focused);
        }
      }
    },
  },
  {
    initialRouteName: 'UserRoot',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      iconStyle: Styles.Navigation.UserTab.IconContainerSize,
      style: Styles.Navigation.UserTab.Container,
      tabStyle: Styles.Navigation.UserTab.TabStyle,
      indicatorStyle: {
        backgroundColor: 'transparent'
      }
    }
  });

export default UserNavigation;
