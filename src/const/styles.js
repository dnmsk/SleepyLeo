import { Dimensions, Platform, StatusBar, Stylesheet } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const Colors = {
  Background: '#eee'
};

const Styles = {
  Background: {
    Container: {
      flex: 1,
      backgroundColor: Colors.Background,
      paddingTop: StatusBar.currentHeight
    }
  },
  Button: {
    Primary: {
      Style: {},
      ContainerStyle: {},
      DisabledStyle: {},
      DisabledContainerStyle: {}
    }
  },
  Navigation:{
    DefaultHeader: {
      HeaderStyle: {
        backgroundColor: Colors.Background
      }
    }
  },
  Font: {
    H1: {
      fontSize: 36,
      fontWeight: 'bold'
    },
    H2: {
      fontSize: 28,
      fontWeight: 'bold'
    },
    H3: {
      fontSize: 28
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
    }
  },
  Default: {
    Carousel: {
      Container: {
        paddingHorizontal: wp(12.5),
      },
      sliderWidth: wp(75),
      item: { width: wp(75) }
    }
  }
};

export default Styles;
