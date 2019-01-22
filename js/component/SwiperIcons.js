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
    backgroundColor:"#fff"
  },
  slide1: {
    justifyContent: 'center',
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
      iconsData:[
        { name:'新口子',
          uri:'http://static.houbank.com/loan-shop/1026fdb3-3be1-4a9e-98d4-36a2e9e2db23.jpg',
          id:'1'
        },
        { name:'新口子',
          uri:'http://static.houbank.com/loan-shop/1026fdb3-3be1-4a9e-98d4-36a2e9e2db23.jpg',
          id: '2'
        },
        { name:'新口子',
          uri:'http://static.houbank.com/loan-shop/1026fdb3-3be1-4a9e-98d4-36a2e9e2db23.jpg',
          id: '3'
        },
        { name:'新口子',
          uri:'http://static.houbank.com/loan-shop/1026fdb3-3be1-4a9e-98d4-36a2e9e2db23.jpg',
          id: '4'
        },
        { name:'新口子',
          uri:'http://static.houbank.com/loan-shop/1026fdb3-3be1-4a9e-98d4-36a2e9e2db23.jpg',
          id: '5'
        },
        { name:'新口子',
          uri:'http://static.houbank.com/loan-shop/1026fdb3-3be1-4a9e-98d4-36a2e9e2db23.jpg',
          id: '6'
        },
        { name:'热门推荐',
          uri:'http://static.houbank.com/loan-shop/e457077f-a13c-4790-be9c-0326dc5f3917.png',
          id: '7'
        },
        { name:'商品变现',
          uri:'http://static.houbank.com/loan-shop/18f6340a-a1b6-4c8a-8013-841df32f94dc.png',
          id: '8'
        }
      ]
    }
  }
  render() {
    const { iconsData}=this.state;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 200}}>
        <Swiper style={styles.wrapper}  dotStyle={{ width: 24, height: 2 }} activeDotStyle={{ width: 24, height: 2 }} >
          <View style={styles.slide1}>
            {iconsData.map((item,index)=>{
              return(
                <View key={item.id} style={{width:'25%',height:86,justifyContent:'center',alignItems:'center'}}>
                  <Image source={{uri:item.uri}} style={{height:45,width:45,marginBottom:5}} />
                  <Text >{item.name}</Text>
                </View>
              )
            })
            }
          </View>
          <View style={styles.slide1}>
            {iconsData.map((item, index) => {
              return (
                <View key={item.id} style={{ width: '25%', height: 86, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: item.uri }} style={{ height: 45, width: 45 }} />
                  <Text>{item.name}</Text>
                </View>
              )
            })
            }
          </View>
        </Swiper>
      </View>
    );
  }
}
