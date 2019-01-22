import React, { Component } from 'react';
import { View, Text, Button, Image} from 'react-native'

export default class My extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={{ backgroundColor:'#f8f8f8',flex:1}}>
        <View style={{backgroundColor:'#fff',paddingLeft:15}}>
          <Text style={{ fontSize: 16, color:'#333',lineHeight:43}}>个人中心</Text>
          <View style={{height:100,paddingLeft:10,justifyContent:'center'}}>
            <Image source={{ uri: 'https://static.houbank.com/app/loan-product-more/img/defaultImg.933141f8.png' }} style={{ height: 55, width: 55, borderRadius: 22.5 }} />
          </View>
        </View>
         
         <View style={{width:'100%',alignItems:'center'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '90%', height: 120, marginVertical: 20, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.09, shadowOffset:{'width':0,'height':5}}}>
            {['1', '2', '3'].map((item, index) => {
              return (<View key={index} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image source={{ uri: 'http://static.houbank.com/loan-shop/6873a700-1b9e-4b6d-afaf-ec3f7766d453.png' }} style={{ height: 45, width: 45, marginBottom: 5 }} />
                <Text style={{ fontSize: 12, color: '#333' }}>贷款攻略</Text>
              </View>)

            })}
          </View>
         </View>
          
          <View style={{width:'100%',alignItems:'center'}}>
          <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%', height: 140, marginVertical: 20, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.09, shadowOffset: { 'width': 0, 'height': 5 } }}>
            <Text style={{fontSize:16,lineHeight:30,paddingLeft:10,paddingTop:10,color:'#333'}}>工具</Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-around',alignItems:'center',width:'100%'}}>
              {['1', '2', '3'].map((item, index) => {
                return (<View key={index} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Image source={{ uri: 'http://static.houbank.com/loan-shop/6873a700-1b9e-4b6d-afaf-ec3f7766d453.png' }} style={{ height: 45, width: 45, marginBottom: 5 }} />
                  <Text style={{ fontSize: 12, color: '#333' }}>贷款攻略</Text>
                </View>)

              })}
            </View>


          </View>

          </View>
      </View>
    )
  }
  _myBtn(){
    this.props.navigation.navigate('Sign')
  }
}