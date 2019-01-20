import React, { Component } from 'react';
import { Text, Button,View, BackHandler, ToastAndroid, Platform } from 'react-native';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="前往navigationScreen2 其实放弃当前 重置默认为navigationScreen2"
          onPress={() => this.props.navigation.navigate('navScr2')}
         />
      </View>
    );
  }
}
export default HomeScreen


