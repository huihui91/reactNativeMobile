import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperNews extends Component {
  constructor(props){
    super(props);
    this.state={
      newsData:[
        {data:'131****6622在钱米钱包成功借款1100元',
         id:'1'
        },
        {data:'131****6622在钱米钱包成功借款1200元',
         id:'2'
        },
        {data:'131****6622在钱米钱包成功借款1300元',
         id:'3'
        },
        {data:'131****6622在钱米钱包成功借款1400元',
         id:'4'
        },
        {data:'131****6622在钱米钱包成功借款1500元',
         id:'5'
        },
        {data:'131****6622在钱米钱包成功借款1600元',
         id:'6'
        }
      ]
    }
  }
  render() {
    const { newsData }=this.state;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '80%', height: 40 }}>
        <Swiper height={40} horizontal={false} autoplay showsPagination={false} loop={true}>
        {
            newsData.map((item,index)=>{
              return ( <View style={styles.slide1} key={index}>
                          <Text style={styles.text1}>{item.data}</Text>
                       </View>)
            })
        }

        </Swiper>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'row',
    width:"100%",
    backgroundColor: "#fff"
  },
  text1:{
    lineHeight:40,
  }
})