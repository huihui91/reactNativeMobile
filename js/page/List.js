
import React, { Component } from 'react';

import { FlatList, View, Text} from 'react-native';

import ListItem from "../component/ListItem.js";

export default class List extends Component{
  constructor(props){
    super(props);
    this.state={
      listData:[
        { key: 'a' }, { key: 'b' },
        { key: 'c' }, { key: 'd' },
        { key: 'e' }, { key: 'f' },
        { key: 'g' }, { key: 'h' },
      ]
    }
  }

  render(){
    const { listData}=this.state;
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <Text style={{ color: '#7a818b', fontSize: 12, width: '100%',backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:8}}> 申请多个产品，可大幅提高贷款成功率 </Text>
        <FlatList
          data={listData}
          renderItem={({ item }) => <ListItem />}
          keyExtractor={(item) => item.key}
          style={{paddingHorizontal:15}}
          ItemSeparatorComponent={() => <View style={{ backgroundColor:'#7a818b',height:1,width:'100%'}}></View>}
        />
        </View>
    )
  }

}

