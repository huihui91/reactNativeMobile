import React, { Component } from 'react';
import { FlatList, View, Text,Image} from 'react-native';

class ItmeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 90 }}>
        <Image source={{ uri: 'http://static.houbank.com/loan-shop/b6419f8d-a9da-4d03-9656-dc07572a97fc.png' }} style={{ height: 60, width: 60, marginRight: 10 }} />
        <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', height: 60 }}>
          <Text style={{ color: "#1b88ee", fontSize: 15 }}>
            助力钱包{this.props.items.item.key}
          </Text>
          <Text style={{ color: "#4a5f76", fontSize: 12 }}>
            额度5000-60000元， 参考月利率0.5%
              </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', padding: 3, paddingLeft: 6, paddingRight: 6, marginRight: 5 }}>
              1步申请
                </Text>
            <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', padding: 3, paddingLeft: 6, paddingRight: 6, marginRight: 5 }}>
              3分钟审核
                </Text>
            <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', padding: 3, paddingLeft: 6, paddingRight: 6, marginRight: 5 }}>
              秒贷60000元
                </Text>
          </View>
        </View>
      </View>
    );
  }
}


export default class HotLoan extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {dataArr}=this.props;
    return(
      <View style={{ backgroundColor: '#fff', paddingRight: 20, paddingLeft: 20, marginTop: 10, width:'100%' }}>
        <Text style={{ fontSize: 16, lineHeight: 50, width: '100%' }}>
          热门贷款
          </Text>
        <FlatList data={dataArr} renderItem={(item) => <ItmeList items={item} />} keyExtractor={item => item.key} ListFooterComponent={() => <View style={{ lineHeigth: 90 }}><Text>没有了</Text></View>} style={{ height: 380 }} ></FlatList>
      </View>
    )
  }
};
