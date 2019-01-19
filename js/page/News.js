import React, { Component } from 'react';
import { View, Text,Button} from 'react-native'

export default class News extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>News</Text>
        <Button title="前往" onPress={() => this.props.navigation.navigate('Search')} />
      </View>
    )
  }
}