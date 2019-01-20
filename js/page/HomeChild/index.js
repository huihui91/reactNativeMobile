
import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import FindAccountPage from './FindAccountPage.js';
import mainPage from './mainPage.js'
import RegPage from './RegPage.js';

const Hometop=createMaterialTopTabNavigator({
  FindAccountPage,
  mainPage,
  RegPage
},{
    initialRouteName:'FindAccountPage'
})

const HomeTop= createAppContainer(Hometop);
export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <HomeTop />
  }
}