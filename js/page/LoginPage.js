import React, { Component } from 'react';
import { View, Text, Button} from 'react-native'

export default class LoginPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Text>Login</Text>
        <Button
          onPress={()=>this.props.navigation.navigate('MainPage')}
          title="To Main"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}