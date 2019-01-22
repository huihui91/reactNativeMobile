import React, { Component } from 'react'

import { View, Button} from 'react-native';
import {
  SafeAreaView
} from 'react-navigation';

export default class LoginOut extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <SafeAreaView>
        <Button title="退出" onPress={()=>this.props.navigation.navigate('Sign')} />
      </SafeAreaView>
    );
  }
}