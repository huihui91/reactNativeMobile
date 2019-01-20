import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-navigation';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet
} from 'react-native'

export default class AuthLoading extends Component {
  constructor(props){
    super(props)
    this._jumpSign();
  }
  _jumpSign(){
    this.props.navigation.navigate('TabNavigator')
  }
  render(){
    return (
          <SafeAreaView>
        <View style={styles.container}>
              <ActivityIndicator />
           <Text style={styles.text}>Loading.....</Text>
            </View>
           </SafeAreaView>
    )
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    marginTop:20,
  },
  text:{
    width:50,
    marginTop: 20,
    height:20,
    color:"black"
  }
})
