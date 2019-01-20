import React, { Component } from 'react';
import { View, Text,Button } from 'react-native'

export default class My extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Button title="退出" onPress={(e) => this._myBtn(e)} />
      </View>
    )
  }
  _myBtn(){
    let dd= JSON.stringify(this.props)
    console.log(dd,'pppee')
    this.props.navigation.navigate('Home')
  }
}