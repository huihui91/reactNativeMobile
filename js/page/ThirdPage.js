import React, { Component } from 'react';
import { WebView } from 'react-native';
class ThirdPage extends Component {
  navigation={
    
  }
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { url } = this.props.navigation.state.params;
    return (
      <WebView source={{ uri: url }}
        style={{flex:1 }}
        ></WebView>
    );
  }
}

export default ThirdPage;