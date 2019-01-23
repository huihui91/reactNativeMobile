

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image,Button } from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';


import TabNavigator from './planNavigate/TabNavigator/index.js'
import AuthLoading from './js/page/Login/AuthLoading.js'
import Sign from './js/page/Login/Sign.js'
import LoginOut from './js/page/Login/LoginOut.js'
import My from './js/page/My.js'
import Product from './js/page/Product.js'

const AppStack = createStackNavigator({
    TabNavigator: TabNavigator,
    Product: Product
},{
     initialRouteName: 'Product',
});

const AuthStack = createStackNavigator({ LoginOut: LoginOut}); //登录



const RootComponent = createSwitchNavigator({
    AuthLoading,
    AppStack,
    AuthStack,
    Sign

},{
    initialRouteName:'AppStack',
     headerMode: 'float'

})
export default createAppContainer(RootComponent);
