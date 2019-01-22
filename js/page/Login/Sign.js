import React, { Component } from 'react'

import { View, Button } from 'react-native';
import {
  SafeAreaView
} from 'react-navigation';

export default class Sign extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView>
        <Button title="登录" onPress={() => this.props.navigation.navigate('AppStack')} />
      </SafeAreaView>
    );
  }
}