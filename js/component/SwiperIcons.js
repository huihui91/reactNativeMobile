import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import pxToDp from '../utily/pxToDp.js'
import Swiper from 'react-native-swiper';
import Http from "../api/index.js"

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:"#fff"
  },
  slide1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    flexWrap:'wrap',
    flexDirection:'row',
    paddingRight:pxToDp(20),
    paddingLeft:pxToDp(20)
  }
})

export default class SwiperView extends Component {
  constructor(props){
    super(props);
    this.state={
      listFirst:[],
      listSecond:[]
    }
  }
  render() {
    const { listFirst, listSecond}=this.state;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: pxToDp(200)}}>
        <Swiper style={styles.wrapper} dotStyle={{ width: pxToDp(24), height: pxToDp(2) }} activeDotStyle={{ width: pxToDp(24), height:pxToDp(2)  }} index={1} >
          <View style={styles.slide1}>
            {listFirst.map((item,index)=>{
              return(
                <TouchableOpacity key={item.label_id.toString()} onPress={() => this._entryList(item)} style={{width:'25%',height:pxToDp(86),justifyContent:'center',alignItems:'center'}} >
                  <Image source={{ uri: item.label_icon_url}} style={{height:pxToDp(45),width:pxToDp(45),marginBottom:pxToDp(5)}} />
                  <Text style={{fontSize:pxToDp(12)}} >{item.label_name}</Text>
                </TouchableOpacity>
            
              )
            })
            }
          </View>
          <View style={styles.slide1}>
            {listSecond.map((item, index) => {
              return (
                <View key={item.label_id.toString()} style={{ width: '25%', height: pxToDp(86), justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: item.label_icon_url }} style={{ height: pxToDp(45), width: pxToDp(45) }} />
                  <Text style={{ fontSize: pxToDp(12) }}>{item.label_name}</Text>
                </View>
              )
            })
            }
          </View>
        </Swiper>
      </View>
    );
  }
  componentDidMount() {
    this._getBannerIcons()
  }
  async  _getBannerIcons(){
    let data = await Http.Post('label/getHomeLabelMessage',{
      biz_account_source: "2",
      index_show: "1",
      label_type: "0",
      pageNumber: "1",
      pageSize: "100",
    });
    let listFirst = data.aaData.slice(0,8);
    let listSecond = data.aaData.slice(8);
    this.setState({
      listFirst,
      listSecond
    })
  }
  _entryList(item){
    this.props.navigation.push('List', {
      typeLabel: item.label_id
    })
  }
}
