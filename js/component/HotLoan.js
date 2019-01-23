import React, { Component } from 'react';
import { FlatList, View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import pxToDp from '../utily/pxToDp.js'

const VH = Dimensions.get('window').height;
class ItemList extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.ItemListView}>

        <Image source={{ uri: 'http://static.houbank.com/loan-shop/b6419f8d-a9da-4d03-9656-dc07572a97fc.png' }} style={styles.ItemListImg} />
        <View style={styles.ItemListSignle}>
          <Text style={styles.ItemListSignleText}>
            助力钱包{this.props.items.item.key}
          </Text>
          <Text style={styles.ItemListSignleText2}>
            额度5000-60000元， 参考月利率0.5%
              </Text>
          <View style={styles.ItemListSignleText3}>
            <Text style={styles.ItemListDes}>
              1步申请
                </Text>
            <Text style={styles.ItemListDes}>
              3分钟审核
                </Text>
            <Text style={styles.ItemListDes}>
              秒贷60000元
                </Text>
          </View>
        </View>
      </View>
    );
  }
}


export default class HotLoan extends Component {
  constructor(props){
    super(props);
    this.state = {
      listHeight: 100
    }
  }
  render(){
    const {dataArr}=this.props;
    return(
      <View style={styles.xloanView} >
        <Text style={styles.headerText}>
          热门贷款
          </Text>
        <FlatList data={dataArr} renderItem={(item) => <ItemList items={item} />} keyExtractor={item => item.id} ListFooterComponent={() => <View style={{ lineHeigth: 90 }}><Text>没有了</Text></View>} ></FlatList>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  xloanView: { 
    backgroundColor: '#fff', 
    paddingRight: pxToDp(20), 
    paddingLeft: pxToDp(20), 
    marginTop: pxToDp(10), 
    width: '100%' ,
    flex:1
  },
  headerText:{ 
    fontSize: pxToDp(16), 
    lineHeight: pxToDp(50), 
    width: '100%' 
  },
  ItemListView:{ 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    height: pxToDp(90) 
  },
  ItemListImg:{ 
    height: pxToDp(60), 
    width: pxToDp(60), 
    marginRight: pxToDp(10) 
  },
  ItemListSignle:{ 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    height: pxToDp(60) 
  },
  ItemListSignleText:{ color: "#1b88ee", fontSize: pxToDp(15) },
  ItemListSignleText2: { color: "#4a5f76", fontSize: pxToDp(12) },
  ItemListSignleText3:{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  ItemListDes: { color: '#52a6ff', fontSize: pxToDp(12), backgroundColor: '#dbedff', padding: pxToDp(3), paddingLeft: pxToDp(6), paddingRight: pxToDp(6), marginRight: pxToDp(5)}

})