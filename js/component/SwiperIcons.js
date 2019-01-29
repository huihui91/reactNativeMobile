import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

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
    paddingRight:20,
    paddingLeft:20
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
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 200}}>
        <Swiper style={styles.wrapper} dotStyle={{ width: 24, height: 2 }} activeDotStyle={{ width: 24, height: 2 }} index={1} >
          <View style={styles.slide1}>
            {listFirst.map((item,index)=>{
              return(
                <View key={item.label_id.toString()} style={{width:'25%',height:86,justifyContent:'center',alignItems:'center'}}>
                  <Image source={{ uri: item.label_icon_url}} style={{height:45,width:45,marginBottom:5}} />
                  <Text style={{fontSize:12}} >{item.label_name}</Text>
                </View>
              )
            })
            }
          </View>
          <View style={styles.slide1}>
            {listSecond.map((item, index) => {
              return (
                <View key={item.label_id.toString()} style={{ width: '25%', height: 86, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: item.label_icon_url }} style={{ height: 45, width: 45 }} />
                  <Text style={{ fontSize: 12 }}>{item.label_name}</Text>
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
}
