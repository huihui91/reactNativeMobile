import React, { Component } from 'react';
import { Text, Button,View, BackHandler, ToastAndroid, Platform } from 'react-native';

import TarBar from '../component/TabBar.js'
import LoginPage from './LoginPage.js'
import RegPage from './RegPage.js'
import FindAccountPage from './FindAccountPage.js'
import My from './My.js'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

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


const BottomNav = createBottomTabNavigator({
  HomeScreen,
  SettingsScreen,
  My
})

const TabNavigator = createAppContainer(BottomNav);

export default class MainPage extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'flex-end'}}>
        <TabNavigator></TabNavigator>
      </View>
    )
  }

}