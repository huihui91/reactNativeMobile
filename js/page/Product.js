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
        <View style={styles.flex1}>
          <ScrollView style={styles.ViewBox}>
            <View style={styles.scrollItemView}>
              <View style={styles.scrollTopView}>
                <View style={styles.topViewBg}>
                  <Image source={{ uri: prodInfo.thirdpartyLogo }} style={styles.topImg} />
                  <Text style={styles.topText}>{
                    prodInfo.prouctCharacteristicList[0].detail_value
                  }</Text>
                </View>
                <View style={styles.middleView}>
                 {
                    prodInfo.prouctCharacteristicList[1].detail_value.split(/,|，/).map((item,index)=>{
                      return <Text style={styles.middleViewText} key={index}>{item}</Text>
                    })
                 }

                </View>
              </View>
            </View>
            <View style={styles.prodInfoView}>
              <View style={styles.prodInfoTop}>
                <View style={styles.prodInfoTopItem} >
                  <Text> 额度范围： {prodInfo.limitMin} - {prodInfo.limitMax}元</Text>
                </View>
                <View style={styles.prodInfoTopItem} >
                  <Text> 期限范围 {prodInfo.termMin} - {prodInfo.termMax} 日</Text>
                </View>
              </View>
              <View style={styles.prodInfoMid}>
                <Text style={styles.prodInfoMidText}>
                  最快10分钟下款
            </Text>
                <Text style={styles.prodInfoMidText2}>
                  最快放款时间
            </Text>
              </View>
              <View style={styles.prodInfoBottom}>
                <Text style={styles.prodInfoBottomText}>
                  参考日利率<Text style={styles.prodInfoBottomTextColor}>0.06%</Text>
                </Text>
                <Text style={styles.prodInfoBottomText}>
                  还款方式<Text style={styles.prodInfoBottomTextColor}>按月还款</Text>
                </Text>
              </View>

            </View>
            <View style={styles.prodInfoConditional}>
              <Text style={styles.prodInfoConditionalTitle}>申请条件</Text>
              <View style={styles.marginTop15}>
                <Text style={styles.ConditionalText}>
                  18周岁以上
            </Text>
                <Text style={styles.ConditionalText}>
                  实名注册手机号
            </Text>
              </View>
            </View>
            <View style={styles.prodInfoConditional} >
              <Text style={styles.prodInfoConditionalTitle} >
                所需资料
           </Text>
              <View style={styles.marginTop15}>
                <Text style={styles.ConditionalText} >
                  实名认证
            </Text>
                <Text style={styles.ConditionalText}>
                  银行卡
            </Text>
              </View>
            </View>
            <View style={styles.prodRecommend} >
              <Text style={styles.prodRecommendTitle} >为您推荐</Text>
              <View style={styles.prodRecommendView}>
                <Image source={{ uri: 'http://static.houbank.com/loan_shop/ddba71a5-75de-4730-87af-c638e6e143e9.png' }} style={styles.prodRecommendImg} />
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
  },
  flex1: { 
    flex: 1 
  },
  scrollItemView:{ 
    backgroundColor: '#f4f5f9', paddingHorizontal: 15, 
    paddingTop: 35, 
    width: '100%', 
    height: 130 
  },
  scrollTopView: { 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    width: '100%', 
    shadowColor: '#000', 
    shadowOpacity: 0.12, 
    shadowOffset: { width: 1, height: 4 } 
  },
  topViewBg:{
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    width: '100%' 
  },
  topImg: { 
    height: 80, 
    width: 80, 
    position: 'relative', 
    top: -15, 
    marginHorizontal: 15 
  },
  topText: { 
    color: '#4a5f76', 
    fontSize: 15 
  },
  middleView:{ 
    backgroundColor: '#f8f8f8', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    height: 35 
  },
  middleViewText:{ 
    backgroundColor: '#dbedff', 
    color: '#52a6ff', 
    fontSize: 12, 
    paddingHorizontal: 4, 
    paddingVertical: 3, 
    marginRight: 5 
  },
  prodInfoView:{ 
    marginTop: 40, 
    paddingHorizontal: 15 
  },
  prodInfoTop:{ 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%' 
  },
  prodInfoTopItem:{
    shadowColor: '#000', 
    shadowOpacity: 0.12, 
    shadowOffset: {
      width: 2, height: 4
    }, 
    backgroundColor: '#f8f8f8', 
    height: 45, 
    width: 165, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5
  },
  prodInfoMid:{ 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 108 
  },
  prodInfoMidText:{ 
    color: '#ff8900', 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  prodInfoMidText2:{ 
    color: '#99a0aa', 
    fontSize: 12 
  },
  prodInfoBottom:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%' 
  },
  prodInfoBottomText:{ 
    color: '#99a0aa', 
    fontSize: 12, 
    flex: 1, 
    textAlign: 'center' 
  },
  prodInfoBottomTextColor:{ 
    color: '#ff8900' 
  },
  prodInfoConditional: { 
    padding: 15, 
    backgroundColor: '#fff', 
    marginTop: 10 
  },
  prodInfoConditionalTitle:{ 
    color: '#333', 
    fontSize: 16 
  },
  marginTop15:{
    marginTop: 15 
  },
  ConditionalText:{ 
    color: '#7a818b', 
    fontSize: 13, 
    marginBottom: 10 
  },
  prodRecommend:{
    backgroundColor: '#fff', 
    padding: 15, 
    marginTop: 10 
  },
  prodRecommendTitle:{ 
    color: '#333', 
    fontSize: 16, 
    lineHeight: 50 
  },
  prodRecommendView:{ 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  prodRecommendImg:{
    height: 60, 
    width: 60
  }
  
  

})
