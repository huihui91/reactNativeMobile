import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'

export default class FindAccountPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Text>FindAccountPage</Text>
        <Button title="前往" onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    )
  }
}