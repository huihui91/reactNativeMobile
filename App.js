

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image,Button } from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';


import TabNavigator from './planNavigate/TabNavigator/index.js'
import AuthLoading from './js/page/Login/AuthLoading.js'
import Sign from './js/page/Login/Sign.js'
import LoginOut from './js/page/Login/LoginOut.js'
import My from './js/page/My.js'

const AppStack = createStackNavigator({
    TabNavigator: TabNavigator
});

const AuthStack = createStackNavigator({ LoginOut: LoginOut}); //登录
const MyStatck = createStackNavigator({ My: My}); //登录



const RootComponent = createSwitchNavigator({
    AuthLoading,
    AppStack,
    AuthStack,
    MyStatck

},{
    initialRouteName:'AuthLoading',
     headerMode: 'float'

})
export default createAppContainer(RootComponent);
