import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Swiper from 'react-native-swiper';
import pxToDp from '../utily/pxToDp.js'

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  slideImg:{
    height: pxToDp(80),
     width:'90%'
  }
})

export default class SwiperView extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const { dataArr }=this.props;

    return (
      <View style={{alignItems:'center',justifyContent:'center',width:'100%',height:80}}>
        <Swiper style={styles.wrapper} autoplay={true} width={pxToDp(380)} height={pxToDp(80)} showsPagination={false} >
         {
           dataArr.map((item, index) => {
             return <View style={styles.slide1} key={index}>
               <Image source={{ uri:item.banner_url}} style={styles.slideImg} />
              </View>
            })
         }
 
        </Swiper>
      </View>
    );
  }
}
