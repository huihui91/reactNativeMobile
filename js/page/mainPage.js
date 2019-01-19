import React, { Component } from 'react';
import { Text, Button,View, BackHandler, ToastAndroid, Platform } from 'react-native';

import TarBar from '../component/TabBar.js'
import LoginPage from './LoginPage.js'
import RegPage from './RegPage.js'
import FindAccountPage from './FindAccountPage.js'


export default class MainPage extends Component{

  static navigationOptions = {
    title:'home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        color="#000000"
        title="Learn More"
      />
    )
  }
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'flex-end'}}>
        <TarBar></TarBar>
      </View>
    )
  }

}