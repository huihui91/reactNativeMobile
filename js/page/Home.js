import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, FlatList, ScrollView,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import FastImage from 'react-native-fast-image'
import HomeChild  from './HomeChild/index.js'
import SwiperView from '../component/SwiperView.js';
import HotLoan from '../component/HotLoan.js';

import pxToDp from '../utily/pxToDp.js'; //px转dp

import Http from '../api/index.js'
class HomeScreen extends Component {
   constructor(props){
    super(props);
    this.state={
      hotProList:[],
      quickEntryList:[],
      toolEntryList:[],
      swiperListData:[]
    }
  }
  async componentDidMount() {
    this._HotProduct();
    this._quickEntry();
    this._toolEntry();
    this._swiperItem();
  }
  render() {
    const { hotProList, quickEntryList, toolEntryList, swiperListData}=this.state
    return (
      <View style={styles.container}>
        <View style={styles.containerChild1}>
          <View style={styles.headerTop}>
            <Text style={styles.headerText}>厚钱袋</Text>
            <View style={styles.searchView}>
              <FastImage
                style={styles.searchImg}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <TextInput style={styles.searchInput} placeholderTextColor='#b0b0b0' placeholder="请搜索贷款产品"></TextInput>
            </View>
          </View>
          <View style={styles.quickEntry}>
            <View style={styles.quickEntryChild}>
              {
                quickEntryList.map((item, index) => {
                  return (
                    <TouchableOpacity onPress={() => this._entryProduct(item)} key={index}>
                    <View  style={styles.flexCenter}>
                        <FastImage source={{ uri: item.label_icon_url }} style={styles.quickImg} />
                      <Text style={styles.textCenter}>
                        {item.label_name}
                    </Text>
                    </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
            <View></View>
            <View style={styles.containerChild1}>
              <SwiperView dataArr={swiperListData}></SwiperView>
            </View>
            <View style={styles.toolBottom}>
              {
                toolEntryList.map((item, index) => {
                  return (
                    <View style={styles.toolItem} key={index} >
                      <FastImage source={{ uri: item.label_icon_url }} style={styles.toolImg} />
                      <Text>{item.label_name}</Text>
                    </View>

 
                  )
                })
              }
             
            </View>
          </View>
        </View>
        <HotLoan navigation={this.props.navigation}   dataArr={hotProList}></HotLoan>
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
  async _HotProduct() {
    let data = await Http.Get('product/getHotProduct');
    let hotProList = data.aaData;
    this.setState({
        hotProList
    })
  }
  
  async _quickEntry(){
    let data = await Http.Post('label/getHomeLabelMessage', {
      biz_account_source: "2",
      index_show: "0",
      label_type: "2"
    })

    let quickEntryList = data.aaData;
    this.setState({
      quickEntryList
    })
  }

  async _toolEntry(){
    let data = await Http.Post('label/getHomeLabelMessage', {
      biz_account_source: "2",
      index_show: "0",
      label_type: "3"
    })
    let toolEntryList = data.aaData;
    this.setState({
      toolEntryList
    })
  }

  async _swiperItem(){
    let data = await Http.Get('banner/getBannerList', {       sourceType:0,
      locationType:0})
      let swiperListData=data;
     this.setState({
       swiperListData
     })
  }

  _entryProduct(item){
    this.props.navigation.push('List',{
      recommendLabel: item.label_id
    })
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    flexDirection: 'column',
    backgroundColor: '#f8f8f8'
  },
  headerTop:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'90%',
  },
  headerText:{
    fontSize: pxToDp(18),
    color: '#333',
    lineHeight: pxToDp(40),
  },
  searchView:{
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center',
    marginLeft:pxToDp(15),
    backgroundColor:'#f8f8f8',
    borderRadius:pxToDp(5)

  },
  searchImg:{
    width:pxToDp(16),
    height:pxToDp(16),
    marginLeft:pxToDp(10),
    marginRight:pxToDp(10)
  },
  searchInput:{
    height:pxToDp(30),
    width:"80%"
  },
  toolBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:pxToDp(20),
    marginTop:pxToDp(20),
  },
  toolItem:{
    width:pxToDp(100),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  containerChild1:{
    backgroundColor: '#fff', 
    paddingHorizontal: pxToDp(20),
    width:"100%"
  },
  quickEntryChild:{ 
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginTop: pxToDp(20), 
    marginBottom: pxToDp(30) 
  },
  quickImg:{ 
    height: pxToDp(50), 
    width: pxToDp(50), 
    marginBottom: pxToDp(5) 
  },
  toolImg:{ 
    height: pxToDp(26), 
    width: pxToDp(26) 
  },
  HotLoan:{ 
    backgroundColor: '#fff', 
    marginTop: pxToDp(10), 
    width: '100%' 
  },
  textCenter:{
    textAlign:'center'
  },
  flexCenter:{
    justifyContent:'center',
    alignItems:'center'
  }
})

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    HomeChild: HomeChild
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  }
);
export default RootStack;
