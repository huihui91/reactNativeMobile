import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default class Product extends Component {

  static navigationOptions={
    headerTitle:'产品'
  }
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ScrollView style={styles.ViewBox}>
        <View style={{ backgroundColor:'#f4f5f9',paddingHorizontal:15,paddingTop:35,width:'100%',height:130}}>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%',shadowColor:'#000',shadowOpacity:0.12,shadowOffset:{width:1,height:4}}}>
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
              <Image source={{ uri: 'http://static.houbank.com/loan-shop/94d80cd3-e0c3-45cd-b881-b2242fcb6430.jpg' }} style={{ height: 80, width: 80, position:'relative',top:-15,marginHorizontal:15}} />
              <Text style={{ color:'#4a5f76',fontSize:15}}>芝麻580极易下款！</Text>
            </View>
            <View style={{ backgroundColor:'#f8f8f8',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%',height:35}}>
              <Text style={{ backgroundColor: '#dbedff', color:'#52a6ff',fontSize:12,paddingHorizontal:4,paddingVertical:3,marginRight:5}}>利息超低</Text>
              <Text style={{ backgroundColor: '#dbedff', color: '#52a6ff', fontSize: 12, paddingHorizontal: 4, paddingVertical: 3,marginRight:5 }}>随借随还</Text>
              <Text style={{ backgroundColor: '#dbedff', color: '#52a6ff', fontSize: 12, paddingHorizontal: 4, paddingVertical: 3,marginRight:5 }}>系统秒批</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop:40,paddingHorizontal:15}}>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
             <View style={{shadowColor:'#000',shadowOpacity:0.12,shadowOffset:{
              width:2,height:4}, backgroundColor: '#f8f8f8',height:45,width:165,justifyContent:'center',alignItems:'center',borderRadius:5}} >
                <Text> 额度范围： 0 - 1000 元</Text>
              </View>
              <View style={{shadowColor:'#000',shadowOpacity:0.12,shadowOffset:{
               width:2,height:4}, backgroundColor: '#f8f8f8',height:45,width:165,justifyContent:'center',alignItems:'center',borderRadius:5}} >
                <Text> 期限范围 0 - 30 日</Text>
              </View>
           </View>
          <View style={{justifyContent:'center',alignItems:'center',height:108}}>
            <Text style={{color:'#ff8900',fontSize:24,fontWeight:'bold'}}>
              最快10分钟下款
            </Text>
            <Text>
              最快放款时间
            </Text>
          </View>
          <View>
            <Text>
              参考日利率0.06%
            </Text>
            <Text>
              还款方式按月还款
            </Text>
          </View>

        </View>
          <View>
             <Text>申请条件</Text>
          <Text>
            18周岁以上
          </Text>
          <Text>
            实名注册手机号
          </Text>
        </View>
        <View>
          <Text>
            所需资料
            </Text>
          <Text>
            实名认证
          </Text>
          <Text>
            银行卡
          </Text>
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  ViewBox:{
    backgroundColor:'#f8f8f8',
    flex:1
  }
})
