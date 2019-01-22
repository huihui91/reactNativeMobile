import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})

export default class SwiperView extends Component {
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',width:'100%',height:80}}>
        <Swiper style={styles.wrapper} autoplay={true} width={380} height={80} showsPagination={false} >
          <View style={styles.slide1}>
            <Image source={{ uri: 'http://static.houbank.com/loan-shop/fc244d0e-520d-4e50-98fa-0da806def64d.jpg' }} style={{ width: "100%", height: 80 }} />
          </View>
          <View style={styles.slide2}>
            <Image source={{ uri: 'http://static.houbank.com/loan-shop/c6ea9e65-b2e1-4dac-bae4-faa710070581.jpg' }} style={{ width: "100%", height: 80 }} />
          </View>
        </Swiper>
      </View>
    );
  }
}
