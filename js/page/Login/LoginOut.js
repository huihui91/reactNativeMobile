import React, { Component } from 'react'

import { View, Button,StyleSheet} from 'react-native';
import {
  SafeAreaView
} from 'react-navigation';

export default class LoginOut extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="退出" onPress={()=>this.props.navigation.navigate('Sign')} />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  text: {
    width: 50,
    marginTop: 20,
    height: 20,
    color: "black"
  }
})