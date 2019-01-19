

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';
import MainPage from "./js/page/mainPage.js";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TarBar from './js/component/TabBar.js'
import LoginPage from './js/page/LoginPage.js'
import RegPage from './js/page/RegPage.js'
import FindAccountPage from './js/page/FindAccountPage.js'

const RootRouter = createStackNavigator(
{
    "MainPage":{
      screen: MainPage
    },
    TarBar,
    LoginPage,
    FindAccountPage

},{
    initialRouteName:'MainPage',
    mode: 'card'
}
)
 

const App = createAppContainer(RootRouter)
export { App} ;

