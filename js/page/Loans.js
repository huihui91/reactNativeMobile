import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView} from 'react-native'
import Http from '../api/index.js'

import SwiperIcons from '../component/SwiperIcons.js';
import SwiperNews from '../component/SwiperNews.js';
import HotLoan from '../component/HotLoan.js'
import Icon from 'react-native-vector-icons/Ionicons';




export default class News extends Component {
  constructor(props) {
    super(props);
    this.state={
      xloanData:[
        {id:'1'},
        {id:'2'},
        {id:'3'},
        {id:'4'},
        {id:'5'},
      ],
      hotProList:[]
    }
  }
  componentDidMount(){
    this._HotProduct()
  }
  render() {
    const { hotProList} =this.state;
    return (
      <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:'#f8f8f8'}}>
        <View style={{ width: '100%', backgroundColor: '#fff', paddingRight: 20, paddingLeft: 20}}>
          <Text style={{ lineHeight: 40, color:'#333',fontSize:16}}>贷款超市</Text>
        </View>
        <View>
          <SwiperIcons></SwiperIcons>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff', paddingRight: 20, paddingLeft: 20,width:'100%'}}>
          <Icon style={{marginRight:20}} name="md-mail" size={30} color="#4F8EF7" />
          <SwiperNews></SwiperNews>
          <Icon style={{ marginRight: 20 }} name="md-arrow-dropright" size={30} color="#4F8EF7" />
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:'100%',paddingRight:20,paddingLeft:10}}>
          <ScrollView horizontal={true} style={{ height: 105,marginTop:10}}>
            {
              ['1','2','3','4','5'].map((item,index)=>{
                return(
                  <View style={{ height: 95, width: 95, alignItems: 'center',marginLeft:10 }} key={index} >
                    <Image source={{ uri: 'http://static.houbank.com/loan-shop/1b7e533e-557c-46e0-89ef-7c78cf2fe00e.png' }} style={{ height: 80, width: 96, borderRadius: 5 }} />
                    <Text style={{ marginTop: 5, fontSize: 12, color: '#7a818b' }}>2000以下</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        
        </View>
        <HotLoan navigation={this.props.navigation} dataArr={hotProList}></HotLoan>
      </View>
    )
  }
  
  async _HotProduct() {
    let data = await Http.Get('product/getHotProduct');
    let hotProList = data.aaData;
    this.setState({
      hotProList
    })
  }
}