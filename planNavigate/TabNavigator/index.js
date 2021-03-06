import React, { Component } from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

import My from '../../js/page/My.js';
import Loan from '../../js/page/Loans.js';
import Home from '../../js/page/Home.js';

import pxToDp from '../../js/utily/pxToDp.js'

const TabBottomNav = createBottomTabNavigator({
  "Home": {
    screen: Home,
    navigationOptions: ({ navigation })=>(
      {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
            name={focused ? 'md-home' : 'md-home'}
            size={pxToDp(24)}
              style={{ color: tintColor }} />
          ),
        title: '首页'
      }
    )
  },
  'Loan': {
    screen: Loan,
    navigationOptions: ({ navigation }) => (
      {
        tabBarLabel: '贷款',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons
            name={focused ? 'md-notifications' : 'md-notifications'}
            size={pxToDp(24)}
            style={{ color: tintColor }} />
        ),
        title: '贷款'
      }
    )
  },
  "My": {
    screen: My,
    navigationOptions: ({ navigation }) => (
      {
        tabBarLabel: '个人中心',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons
            name={focused ? 'md-person' : 'md-person'}
            size={pxToDp(24)}
            style={{ color: tintColor }} />
        ),
        title: '个人中心'
      }
      )
    }
  }, {
    initialRouteName: 'Home',//默认tab
    tabBarPosition: 'bottom',//tabBar位置
    backBehavior: 'none',
    swipeEnabled: false,//不可滑动
    animationEnabled: false,//切换页面时候没有滑动效果
    tabBarOptions: {
      activeTintColor: '#38f',
      inactiveTintColor: '#333333',
      showIcon: true,
      indicatorStyle: {
        height: 0
      },
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        paddingBottom: 0,
      },
      labelStyle: {
        fontSize: pxToDp(12),
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
      },
      tabStyle: {
        height: pxToDp(46)
      }
    }
}
)

TabBottomNav.navigationOptions = ({ navigation, screenProps }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  if (routeName === 'Home') {
    title = '首页';
  } else if (routeName === 'Loan') {
    title = '贷款';
  } else if (routeName === 'My') {
    title = '个人中心';
  }
  return {
    title,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#333',
    headerTitleStyle: {
    }
  };
  
}

export default TabBottomNav;