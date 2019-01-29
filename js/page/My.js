import React, { Component } from 'react';
import { View, Text, Button, Image,StyleSheet} from 'react-native'

export default class My extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.flex1}>
        <View style={styles.headBg}>
          <Text style={styles.headText}>个人中心</Text>
          <View style={styles.headImgView}>
            <Image source={{ uri: 'https://static.houbank.com/app/loan-product-more/img/defaultImg.933141f8.png' }} style={styles.headImg} />
          </View>
        </View>
         
         <View style={styles.quickView}>
          <View style={styles.quickItemView}>
            {['1', '2', '3'].map((item, index) => {
              return (<View key={index} style={styles.itemView}>
                <Image source={{ uri: 'http://static.houbank.com/loan-shop/6873a700-1b9e-4b6d-afaf-ec3f7766d453.png' }} style={styles.itemImg} />
                <Text style={styles.itemText}>贷款攻略</Text>
              </View>)

            })}
          </View>
         </View>
          
        <View style={styles.quickView}>
          <View style={styles.toolView}>
            <Text style={styles.toolText}>工具</Text>
            <View style={styles.toolItemView}>
              {['1', '2', '3'].map((item, index) => {
                return (<View key={index} style={styles.itemView}>
                  <Image source={{ uri: 'http://static.houbank.com/loan-shop/6873a700-1b9e-4b6d-afaf-ec3f7766d453.png' }} style={styles.itemImg} />
                  <Text style={styles.itemText}>贷款攻略</Text>
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

const styles = StyleSheet.create({
  flex1: { 
    backgroundColor: '#f8f8f8', 
    flex: 1 
  },
  headBg: { 
    backgroundColor: '#fff', 
    paddingLeft: 15 
  },
  headText:{ 
    fontSize: 16, 
    color: '#333', 
    lineHeight: 43 
  },
  headImgView: { 
    height: 100, 
    paddingLeft: 10, 
    justifyContent: 'center' 
  },
  headImg: { 
    height: 55, 
    width: 55, 
    borderRadius: 22.5 
  },
  quickView: { 
    width: '100%', 
    alignItems: 'center' 
  },
  quickItemView: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    width: '90%', 
    height: 120, 
    marginVertical: 20, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.09, 
    shadowOffset: { 'width': 0, 'height': 5 } 
  },
  itemView: { 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  itemImg: { 
    height: 45, 
    width: 45, 
    marginBottom: 5 
  },
  itemText: { 
    fontSize: 12, 
    color: '#333' 
  },
  toolView: { 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    width: '90%', 
    height: 140, 
    marginVertical: 20, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.09, 
    shadowOffset: { 'width': 0, 'height': 5 } 
  },
  toolText: { 
    fontSize: 16, 
    lineHeight: 30, 
    paddingLeft: 10, 
    paddingTop: 10, 
    color: '#333' 
  },
  toolItemView: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    width: '100%' 
  }
})