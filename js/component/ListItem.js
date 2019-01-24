
import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, AlertIOS,StyleSheet} from 'react-native';

 export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <TouchableOpacity onPress={() => AlertIOS.alert(
        'Sync Complete',
        'All your data are belong to us.'
      )} activeOpacity={0.6}>
        <View style={styles.itemView}>
            <Image source={{uri:'http://static.houbank.com/loan_shop/ddba71a5-75de-4730-87af-c638e6e143e9.png'}} style={styles.img} />
            <View style={styles.textView}>
            <Text style={styles.textHead}>立即贷</Text>
              <Text style={styles.textMoney} >额度500元-5000元，参考利率0.065%/日 </Text>
              <View style={styles.textDesc}>
                <Text style={styles.textDescSmall} >国内领先的线上小额借贷平台</Text>
              <Text style={styles.textDescSmall}>极速</Text>
              <Text style={styles.textDescSmall}>高通过率</Text>
              </View>
            </View>
          </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  itemView:{ 
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginVertical: 10 },
    img:{
      height: 60, 
      width: 60
    },
    textView:{
      marginLeft: 10,
      height: 60 
    },
   textHead:{ 
    color: '#1b88ee', 
    fontSize: 15 
   },
   textMoney: { 
    color: '#4a5f76', 
    fontSize: 12, 
    marginTop: 2, 
    marginBottom: 5 
  },
  textDesc:{ 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  textDescSmall:{ 
    color: '#52a6ff', 
    fontSize: 12, 
    backgroundColor: '#dbedff', 
    marginRight: 4, 
    padding: 2 
  }
})