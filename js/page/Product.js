import React, { Component } from 'react'
import Http from '../api/index.js'
import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity} from 'react-native';

export default class Product extends Component {

  static navigationOptions={
    headerTitle:'产品'
  }
  constructor(props){
    super(props)
    this.state={
      prodInfo:{}
    }
  }
  componentDidMount() {
    this._getProDetail()
  }
  render() {
    const {prodInfo}=this.state;
    if(JSON.stringify(prodInfo) == "{}"){
      return <Text>loading</Text>
    }else{

      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.ViewBox}>
            <View style={{ backgroundColor: '#f4f5f9', paddingHorizontal: 15, paddingTop: 35, width: '100%', height: 130 }}>
              <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', shadowColor: '#000', shadowOpacity: 0.12, shadowOffset: { width: 1, height: 4 } }}>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                  <Image source={{ uri: prodInfo.thirdpartyLogo }} style={{ height: 80, width: 80, position: 'relative', top: -15, marginHorizontal: 15 }} />
                  <Text style={{ color: '#4a5f76', fontSize: 15 }}>{
                    prodInfo.prouctCharacteristicList[0].detail_value
                  }</Text>
                </View>
                <View style={{ backgroundColor: '#f8f8f8', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: 35 }}>
                 {
                    prodInfo.prouctCharacteristicList[1].detail_value.split('，').map((item,index)=>{
                      return <Text style={{ backgroundColor: '#dbedff', color: '#52a6ff', fontSize: 12, paddingHorizontal: 4, paddingVertical: 3, marginRight: 5 }} key={index}>{item}</Text>
                    })
                 }

                </View>
              </View>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <View style={{
                  shadowColor: '#000', shadowOpacity: 0.12, shadowOffset: {
                    width: 2, height: 4
                  }, backgroundColor: '#f8f8f8', height: 45, width: 165, justifyContent: 'center', alignItems: 'center', borderRadius: 5
                }} >
                  <Text> 额度范围： {prodInfo.limitMin} - {prodInfo.limitMax}元</Text>
                </View>
                <View style={{
                  shadowColor: '#000', shadowOpacity: 0.12, shadowOffset: {
                    width: 2, height: 4
                  }, backgroundColor: '#f8f8f8', height: 45, width: 165, justifyContent: 'center', alignItems: 'center', borderRadius: 5
                }} >
                  <Text> 期限范围 {prodInfo.termMin} - {prodInfo.termMax} 日</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', height: 108 }}>
                <Text style={{ color: '#ff8900', fontSize: 24, fontWeight: 'bold' }}>
                  最快10分钟下款
            </Text>
                <Text style={{ color: '#99a0aa', fontSize: 12 }}>
                  最快放款时间
            </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Text style={{ color: '#99a0aa', fontSize: 12, flex: 1, textAlign: 'center' }}>
                  参考日利率<Text style={{ color: '#ff8900' }}>0.06%</Text>
                </Text>
                <Text style={{ color: '#99a0aa', fontSize: 12, flex: 1, textAlign: 'center' }}>
                  还款方式<Text style={{ color: '#ff8900' }}>按月还款</Text>
                </Text>
              </View>

            </View>
            <View style={{ padding: 15, backgroundColor: '#fff', marginTop: 10 }}>
              <Text style={{ color: '#333', fontSize: 16 }}>申请条件</Text>
              <View style={{ marginTop: 15 }}>
                <Text style={{ color: '#7a818b', fontSize: 13, marginBottom: 10 }}>
                  18周岁以上
            </Text>
                <Text style={{ color: '#7a818b', fontSize: 13, marginBottom: 10 }}>
                  实名注册手机号
            </Text>
              </View>
            </View>
            <View style={{ padding: 15, backgroundColor: '#fff', marginTop: 10 }} >
              <Text style={{ color: '#333', fontSize: 16 }} >
                所需资料
           </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#7a818b', fontSize: 13, marginBottom: 10 }} >
                  实名认证
            </Text>
                <Text style={{ color: '#7a818b', fontSize: 13, marginBottom: 10 }}>
                  银行卡
            </Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#fff', padding: 15, marginTop: 10 }} >
              <Text style={{ color: '#333', fontSize: 16, lineHeight: 50 }} >为您推荐</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image source={{ uri: 'http://static.houbank.com/loan_shop/ddba71a5-75de-4730-87af-c638e6e143e9.png', height: 60, width: 60 }} />
                <View style={{ marginLeft: 10, height: 60 }}>
                  <Text style={{ color: '#1b88ee', fontSize: 15 }}>立即贷</Text>
                  <Text style={{ color: '#4a5f76', fontSize: 12, marginTop: 2, marginBottom: 5 }} >额度500元-5000元，参考利率0.065%/日 </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', marginHorizontal: 4, padding: 2 }} >国内领先的线上小额借贷平台</Text>
                    <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', marginHorizontal: 4, padding: 2 }}>极速</Text>
                    <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', marginHorizontal: 4, padding: 2 }}>高通过率</Text>
                  </View>
                </View>

              </View>
            </View>
          </ScrollView>
          <View style={{ backgroundColor: '#1b88ee', position: 'absolute', width: '100%', bottom: 0, left: 0 }}>
            <TouchableOpacity onPress={()=>this._getThirdHome()}>
            <Text style={{ color: '#fff', lineHeight: 55, width: "100%", textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>立即申请</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

  }
 
  async _getProDetail(){
    let productId = this.props.navigation.state.params.productId
    let data = await Http.Post('/product/getProductByCode',{
      bizAccountSource: "2",
      channel: "h5",
      productId: productId
    })
    this.setState({
      prodInfo: data.product
    })
  }

  async _getThirdHome(){
    let url = this.state.prodInfo.applyUrl;
    this.props.navigation.push('ThirdPage',{
      url: url
    })
  }
}

const styles = StyleSheet.create({
  ViewBox:{
    backgroundColor:'#f8f8f8',
    flex:1,
    marginBottom:60
  }
})
