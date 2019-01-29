
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import FindAccountPage from './FindAccountPage.js';
import mainPage from './mainPage.js'
import RegPage from './RegPage.js';

const Hometop=createMaterialTopTabNavigator({
  FindAccountPage,
  mainPage,
  RegPage
},{
    initialRouteName:'FindAccountPage',
    headerMode: 'none'
})



export default Hometop
