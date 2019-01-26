import React, { Component } from 'react';
import { FlatList, View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import pxToDp from '../utily/pxToDp.js'

const VH = Dimensions.get('window').height;
import ListItem from './ListItem.js'

export default class HotLoan extends Component {
  constructor(props){
    super(props);
    this.state = {
      listHeight: 100
    }
  }
  render(){
    const {dataArr}=this.props;
    if (JSON.stringify(dataArr)=='{}'){
      return<Text>loading</Text>
    }else{
      return (
        <View style={styles.xloanView} >
          <Text style={styles.headerText}>
            热门贷款
          </Text>
          <FlatList data={dataArr} renderItem={(item) => <ListItem items={item} navigation={this.props.navigation} />} keyExtractor={this._keyExtractor} ListFooterComponent={() => <View style={{ lineHeigth: 90 }}><Text>没有了</Text></View>} ></FlatList>
        </View>
      )
    }

  }
  _keyExtractor = (item, index) => (item.productId+'');
};

const styles = StyleSheet.create({
  xloanView: { 
    backgroundColor: '#fff', 
    paddingRight: pxToDp(20), 
    paddingLeft: pxToDp(20), 
    marginTop: pxToDp(10), 
    width: '100%' ,
    flex:1
  },
  headerText:{ 
    fontSize: pxToDp(16), 
    lineHeight: pxToDp(50), 
    width: '100%' 
  }
})