import React, { Component } from 'react';
import { View, Text,Button } from 'react-native'


import { createStackNavigator, createAppContainer } from 'react-navigation'

import News from './News.js'
import Search from './Search.js'

const StaticRouter=createStackNavigator({
  News,
  Search
},{
  model:'model'
})

const MyApp = createAppContainer(StaticRouter)

export default MyApp;
