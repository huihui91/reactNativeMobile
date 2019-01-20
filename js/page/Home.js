import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeChild  from './HomeChild/index.js'
class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      log:'tt'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={(e) => this._btnPre(e)}
        />
        <Text>{this.state.log}</Text>
      </View>
    );
  }
  _btnPre(){
    let dd=JSON.stringify(this.props)
    this.setState({
      log:dd
    })
    this.props.navigation.navigate('Details')
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('HomeChild')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    HomeChild: HomeChild
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Home extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return <AppContainer props={this.props} />
  }
}