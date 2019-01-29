
import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, AlertIOS,StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image'

import pxToDp from '../utily/pxToDp.js'
 export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { items } = this.props;
    if (JSON.stringify(items) == "{}"){
      return <Text>loading</Text>
    }else{
      return (
        <TouchableOpacity onPress={() => this._productDetail()} activeOpacity={0.6}>
          <View style={styles.itemView}>
            <FastImage source={{ uri: items.item.thirdpartyLogo }} style={styles.img} />
            <View style={styles.textView}>
              <Text style={styles.textHead}>{items.item.productName}</Text>
              <Text style={styles.textMoney} >{
                items.item.productDetailList[0].detail_value
              } </Text>
              <View style={styles.textDesc} >
                {
                items.item.productDetailList[1].detail_value.split(',').map((item,index)=>{
                      return(
                        <Text style={styles.textDescSmall} key={index} >{item}</Text>
                      )
                  })
                }
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

   _productDetail(){
     let productId = this.props.items.item.productId;
     this.props.navigation.navigate('Product',{
       productId: productId
     })
   }
}


const styles = StyleSheet.create({
  itemView:{ 
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginVertical: pxToDp(10) },
    img:{
      height: pxToDp(60), 
      width: pxToDp(60)
    },
    textView:{
      marginLeft: pxToDp(10),
      height: pxToDp(60) 
    },
   textHead:{ 
    color: '#1b88ee', 
    fontSize: pxToDp(15) 
   },
   textMoney: { 
    color: '#4a5f76', 
    fontSize: pxToDp(12), 
    marginTop: pxToDp(2), 
    marginBottom: pxToDp(5) 
  },
  textDesc:{ 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center' ,
  },
  textDescSmall:{ 
    color: '#52a6ff', 
    fontSize: pxToDp(12), 
    backgroundColor: '#dbedff', 
    marginRight: pxToDp(4), 
    padding: pxToDp(2) 
  }
})