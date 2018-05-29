import { Dimensions, Platform, StatusBar, Stylesheet } from 'react-native';

let viewportWidth, viewportHeight;
set_dimensions();
Dimensions.addEventListener('change', set_dimensions);

function set_dimensions() {
  let { width: _viewportWidth, height: _viewportHeight } = Dimensions.get('window');
  viewportHeight = _viewportHeight;
  viewportWidth = _viewportWidth;
};

//67*37
//button width 21.3
const maketHeight = 66.8;
const maketWidth = 37;

function wp_height(percentage) {
  const value = (percentage * viewportHeight);
  return Math.round(value);
};

function wp_width(percentage) {
  const value = (percentage * viewportWidth);
  return Math.round(value);
};

function getImage(images, big_border, medium_border) {
  let max_dimension = Math.max(viewportHeight, viewportWidth);

  if (max_dimension > big_border) {
    return images.large;
  }
  if (max_dimension > medium_border) {
    return images.medium;
  }
  return images.small;
};

const MagicNumbers = {
  StatusBarHeight: 0
};

const Colors = {
  Background: '#000'
};

const FontSize = {
  Title: wp_height(3.88 / maketHeight),
  InputTitle: wp_height(1.59 / maketHeight),
  Regular: wp_height(1.59 / maketHeight),
  Button: wp_height(2.48 / maketHeight),
  WindowHeader: wp_height(2.12 / maketHeight),
  Large: wp_height(2.82 / maketHeight),
  Input: wp_height(1.94 / maketHeight),
};

const Images = {
  AppBackground: {
    small: require('./assets/images/app_background/small.jpg'),
    medium: require('./assets/images/app_background/medium.jpg'),
    large: require('./assets/images/app_background/large.jpg'),
  },
  Components: {
    Cross: {
      Yellow: require('./assets/images/components/cross/yellow.png'),
      White: require('./assets/images/components/cross/white.png'),
    },
    Notifications: {
      Recommendation: require('./assets/images/components/notifications/recommendation.png')
    }
  },
  Logo: require('./assets/images/logo/small.png'),
  Navigation: {
    User: {
      Alert: require('./assets/images/navigation/user/tab_icons/alert.png'),
      Favourite: require('./assets/images/navigation/user/tab_icons/favourite.png'),
      Info: require('./assets/images/navigation/user/tab_icons/info.png'),
      Profile: require('./assets/images/navigation/user/tab_icons/profile.png'),
      Sleep: require('./assets/images/navigation/user/tab_icons/sleep.png'),
    }
  },
  Screen: {
    Sleep: {
      Arrow: {
        OrangeLeftUp: require('./assets/images/screen/sleep/arrow_orange_left_up.png'),
        BlueBottomTop: require('./assets/images/screen/sleep/arrow_blue_bottom_top.png'),
        BlueLeftUp: require('./assets/images/screen/sleep/arrow_blue_left_up.png'),
      },
      DatePicker: require('./assets/images/screen/sleep/date_picker.png'),
      TodaySleeps: {
        Moon: require('./assets/images/screen/sleep/moon.png'),
        Sun: require('./assets/images/screen/sleep/sun.png')
      }
    }
  }
};

const IsIos = Platform.OS === 'ios';

const Fn = {
  ios: IsIos,
  IosOrAndroid: (ios, android) => IsIos ? ios : android,
  IosOrAndroidFn: (ios, android) => IsIos ? ios() : android(),
  height: function() { return viewportHeight - (StatusBar.currentHeight || MagicNumbers.StatusBarHeight); },
  width: function() { return viewportWidth; },
  VerticalPercent: function(percent) {
    return wp_height(percent);
  },
  HorizontalPercent: function(percent) {
    return wp_width(percent);
  }
};

const Styles = {
  Fn: {
    ...Fn
  },
  Background: {
    MainContainer: {
      backgroundColor: Colors.Background
    },
    Container: {
      backgroundColor: '#472561',
      marginTop: 0,//StatusBar.currentHeight || MagicNumbers.StatusBarHeight,
      width: '100%',
      height: '100%'
    },
    ImgSrc: getImage(Images.AppBackground, 1600, 900),
    Layout: {
      Style: {}
    }
  },
  Navigation:{
    CardStyle: {
      backgroundColor: 'transparent',
    },
    UserTab: {
      Container: {
        backgroundColor: '#684878',
        height: wp_width(Fn.IosOrAndroid(7.6, 5)/maketWidth),
        paddingLeft: wp_width(1/maketWidth),
        paddingRight: wp_width(1/maketWidth),
      },
      Icon: {
        width: wp_width(Fn.IosOrAndroid(4.5, 3)/maketWidth),
        height: wp_width(Fn.IosOrAndroid(4.5, 3)/maketWidth),
      },
      IconShadow: {
        padding: wp_width(Fn.IosOrAndroid(2.5, 1.7)/maketWidth)/2,
        backgroundColor: 'transparent',
        borderRadius: wp_width(Fn.IosOrAndroid(7, 4.7)/maketWidth)/2,
      },
      IconShadowActive: {
        backgroundColor: '#482a5a',
      },
      IconContainerSize: {
        width: wp_width(Fn.IosOrAndroid(7, 4.7)/maketWidth),
        height: wp_width(Fn.IosOrAndroid(7, 4.7)/maketWidth)
      },
      TabStyle: {
        margin: 0,
        padding: wp_width(Fn.IosOrAndroid(0.3, 0.2)/maketWidth)
      }
    }
  },
  Blocks: {
    Br: {
      height: wp_height(0.035)
    },
    Center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Cross: {
      Default: {
        resizeMode: 'contain'
      },
      Large: {
        height: .7 * FontSize.Large,
        width: .7 * FontSize.Large
      },
      Regular: {
        height: .7 * FontSize.Regular,
        width: .7 * FontSize.Regular,
        margin: .3 * FontSize.Regular
      }
    },
    Hr: {
      height: 1,
      width: '100%',
      backgroundColor: '#fdfdfb',
      opacity: 0.5
    },
    VerticalMiddle: {
      flexGrow:1,
      alignItems: 'center',
      justifyContent:'center'
    },
    Footer: {
      backgroundColor: 'transparent',
      height: wp_height(7/maketHeight)
    },
    LogoImage: {
      height: wp_height(8.2/maketHeight),
      width: wp_width(9.3/maketWidth),
      resizeMode: 'contain'
    },
    LogoImage: {
      height: wp_height(8.2/maketHeight),
      width: wp_width(9.3/maketWidth),
      resizeMode: 'contain'
    },
    Recommendation: {
      backgroundColor: '#2c244d',
      marginLeft: wp_width(0.02),
      marginRight: wp_width(0.02),
      paddingLeft: wp_width(0.1),
      paddingRight: wp_width(0.1),
      paddingBottom: wp_height(1.6/maketHeight),
      paddingTop: wp_height(1.6/maketHeight),
      borderBottomLeftRadius: wp_width(0.04),
      borderBottomRightRadius: wp_width(0.04),
    },
    Row: {
      flex: 1,
      flexDirection: 'row'
    },
    Notifications: {
      Layout: {
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
      },
      Container: {
        marginTop: Fn.VerticalPercent(0.2),
        marginLeft: Fn.HorizontalPercent(0.025),
        marginRight: Fn.HorizontalPercent(0.025),
        width: Fn.HorizontalPercent(0.95)
      },
      MessageContainer: {
        borderRadius: 15,
        paddingLeft: Fn.HorizontalPercent(0.05),
        paddingRight: Fn.HorizontalPercent(0.05),
        paddingTop: Fn.VerticalPercent(0.05),
        paddingBottom: Fn.VerticalPercent(0.05),
        backgroundColor: '#ece2be'
      }
    },
    WindowTitle: {
      backgroundColor: '#6d68a0',
      paddingTop: wp_height(1/maketHeight) + (Platform.OS === 'ios' ? 20 : 0),
      paddingBottom: wp_height(1/maketHeight)
    },
    Input: {
      Container: {
        borderColor: '#bdb8bf',
        width: wp_width(23.2/maketWidth)
      },
      Element: {
        color: '#fff5c8',
        fontSize: FontSize.Input
      },
      CheckBox: {
        checkboxBgColor: 'red',
        checkboxTickColor: 'green',
      }
    },
    PlaceholderTextColor: '#bdb8bf',
    Screen: {
      Paddings: {
        paddingLeft: wp_width(0.065),
        paddingRight: wp_width(0.065),
      },
      Default: {
        FooterText: {
          Left: {
            paddingLeft: wp_width(2/maketWidth)
          },
          Right: {
            paddingRight: wp_width(2/maketWidth)
          }
        }
      }
    }
  },
  Button: {
    Default: {
      Container: {
        height: wp_height(5.5/maketHeight),
        width: wp_width(24/maketWidth),
        overflow: 'hidden',
        borderRadius: wp_height(2/maketHeight),
        backgroundColor: '#fff5c8'
      },
      Text: {
        color: '#16043a',
        fontSize: FontSize.Button,
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    Slave: {
      Container: {
        backgroundColor: 'transparent',
        borderWidth: wp_width(0.2/maketWidth),
        borderColor: '#fff5c8',
      },
      Text: {
        color: '#fff5c8'
      }
    }
  },
  Font: {
    Default: {
      fontFamily: 'Exo2-Regular',
      fontSize: FontSize.Regular,
      color: '#fff5c8',
      textAlign: 'left'
    },
    Info: {
      fontSize: FontSize.Regular,
      color: '#fdfdfb'
    },
    InfoBlue: {
      fontSize: FontSize.Regular,
      color: '#9790db'
    },
    InfoOrange: {
      fontSize: FontSize.Regular,
      color: '#fa902a'
    },
    InfoDarkBlue: {
      fontSize: FontSize.Regular,
      color: '#2c244d'
    },
    InfoBlack: {
      fontSize: FontSize.Regular,
      color: 'black'
    },
    Bold: {
      fontFamily: 'Exo2-Bold'
    },
    H1: {
      fontSize: FontSize.Title,
      fontFamily: 'Exo2-Bold'
    },
    H2: {
      fontSize: FontSize.Large
    },
    H3: {
      fontSize: FontSize.WindowHeader,
      fontFamily: 'Exo2-Bold'
    },
    H4: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    H5: {
      fontSize: 24
    },
    H6: {
      fontSize: 20
    },
    Error: {
      fontSize: 18,
      color: 'red',
      padding: 5
    },
    Inactive: {
      opacity: 0.5
    },
    Underline: {
      textDecorationLine: 'underline'
    }
  }
};

export { Styles as Styles, Images as Images };
