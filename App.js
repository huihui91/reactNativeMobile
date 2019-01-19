

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image,Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


import TabNavigator from './planNavigate/TabNavigator/index.js'
import LoginPage  from './js/page/LoginPage.js'

const RootComponent = createSwitchNavigator({
    "TabNavigator":{
        screen: TabNavigator,
    },
    'login':{
        screen: LoginPage
    }
},{
    initialRouteName:'login',
     headerMode: 'float'

})
export default createAppContainer(RootComponent);

