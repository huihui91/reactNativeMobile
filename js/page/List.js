
import React, { Component } from 'react';

import { FlatList, View, Text} from 'react-native';
import Http from '../api/index.js'

import ListItem from "../component/ListItem.js";


export default class List extends Component{
  constructor(props){
    super(props);
    this.state={
      listData:[]
    }
    this._getList = this._getList.bind(this)
  }
  componentDidMount(){
    this._getList()
  }

  render(){
    const { listData}=this.state;
    const {navigation}=this.props
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <Text style={{ color: '#7a818b', fontSize: 12, width: '100%',backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:8}}> 申请多个产品，可大幅提高贷款成功率 </Text>
        <FlatList
          data={listData}
          renderItem={(item) => <ListItem items={item} navigation={this.props.navigation} />} 
          keyExtractor={(item) => item.productId.toString()}
          style={{paddingHorizontal:15}}
          ItemSeparatorComponent={() => <View style={{ backgroundColor:'#7a818b',height:1,width:'100%'}}></View>}
        />
        </View>
    )
  }
  async _getList() {
    let id = this.props.navigation.state.params.recommendLabel
    let data = await Http.Post('product/queryProductList', {
      bizAccountSource: "2",
      channel: "h5",
      pageNum: 1,
      pageSize: 10,
      recommendLabel: id
    })
    let listData = data.aaData;
    this.setState({
      listData
    })
  }

}

