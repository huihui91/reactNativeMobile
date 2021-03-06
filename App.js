

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image,Button } from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';


import TabNavigator from './planNavigate/TabNavigator/index.js'
import AuthLoading from './js/page/Login/AuthLoading.js'
import Sign from './js/page/Login/Sign.js'
import LoginOut from './js/page/Login/LoginOut.js'
import My from './js/page/My.js'
import List from './js/page/List.js'
import Product from './js/page/Product.js'
import ThirdPage from './js/page/ThirdPage.js'
import NavigationService from './js/utily/NavigationService.js'

const AppStack = createStackNavigator({
    TabNavigator: TabNavigator,
    List: List,
    Product: Product,
    ThirdPage: ThirdPage
},{
    initialRouteName: 'TabNavigator',
});

const AuthStack = createStackNavigator({ LoginOut: LoginOut}); //登录



const RootComponent = createSwitchNavigator({
    AuthLoading,
    AppStack,
    AuthStack,
    Sign

},{
    initialRouteName:'AuthLoading',
     headerMode: 'float'

})

const AppContainer = createAppContainer(RootComponent);
export default class App extends Component {

    render() {
        return (
            <AppContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}></AppContainer>
        );
    }
}
