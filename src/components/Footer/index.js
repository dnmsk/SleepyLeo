import React from 'react';
import { Footer } from 'native-base';
import { Styles } from '/src/const/styles';

class FooterCustom extends React.Component {
  render() {
    return (
      <Footer style={[Styles.Blocks.Footer]}>
        {this.props.children}
      </Footer>
    );
  }
}

export default FooterCustom;
