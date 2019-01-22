import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, FlatList, ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeChild  from './HomeChild/index.js'
import SwiperView from '../component/SwiperView.js';
import HotLoan from '../component/HotLoan.js';

class ItmeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 90 }}>
        <Image source={{ uri: 'http://static.houbank.com/loan-shop/b6419f8d-a9da-4d03-9656-dc07572a97fc.png' }} style={{ height: 60, width: 60, marginRight: 10 }} />
        <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', height: 60 }}>
          <Text style={{ color: "#1b88ee", fontSize: 15 }}>
            助力钱包{this.props.items.item.key}
              </Text>
          <Text style={{ color: "#4a5f76", fontSize: 12 }}>
            额度5000-60000元， 参考月利率0.5%
              </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', padding: 3, paddingLeft: 6, paddingRight: 6, marginRight: 5 }}>
              1步申请
                </Text>
            <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', padding: 3, paddingLeft: 6, paddingRight: 6, marginRight: 5 }}>
              3分钟审核
                </Text>
            <Text style={{ color: '#52a6ff', fontSize: 12, backgroundColor: '#dbedff', padding: 3, paddingLeft: 6, paddingRight: 6, marginRight: 5 }}>
              秒贷60000元
                </Text>
          </View>
        </View>
      </View>
    );
  }
}

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      quickEntryData:[
        {key:'a'},
        {key:'b'},
        {key:'c'},
        {key:'d'},
        {key:'e'},
      ]
    }
  }
  render() {
    const {quickEntryData}=this.state
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#fff',paddingRight:20,paddingLeft:20}}>
          <View style={styles.headerTop}>
            <Text style={styles.headerText}>厚钱袋</Text>
            <View style={styles.searchView}>
              <Image
                style={styles.searchImg}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <TextInput style={styles.searchInput} placeholderTextColor='#b0b0b0' placeholder="请搜索贷款产品"></TextInput>
            </View>
          </View>
          <View style={styles.quickEntry}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginTop: 20, marginBottom: 30 }}>
              {
                quickEntryData.map((item, index) => {
                  return (
                    <View key={index}>
                      <Image source={{ uri: 'http://static.houbank.com/loan-shop/2b9fcb50-4da2-4baf-9744-9a5f37494683.jpg' }} style={{ height: 50, width: 50, marginBottom: 5 }} />
                      <Text>
                        现金分期
                    </Text>
                    </View>
                  )
                })
              }
            </View>
            <View></View>
            <View>
              <SwiperView></SwiperView>
            </View>
            <View style={styles.toolBottom}>
              <View style={styles.toolItem}>
                <Image source={{ uri: 'http://static.houbank.com/loan-shop/7f01ea8f-22a1-4af9-8f24-521eba5c1f46.png' }} style={{ height: 26, width: 26 }} />
                <Text>贷款攻略1</Text>
              </View>
              <View style={styles.toolItem}>
                <Image source={{ uri: 'http://static.houbank.com/loan-shop/7f01ea8f-22a1-4af9-8f24-521eba5c1f46.png' }} style={{ height: 26, width: 26 }} />
                <Text>贷款攻略2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', paddingRight: 20, paddingLeft: 20 ,marginTop:10,width:'100%'}}>
          <Text style={{fontSize:16,lineHeight:50,width:'100%'}}>
            热门贷款
          </Text>
          <FlatList data={quickEntryData} renderItem={(item) => <ItmeList items={item} />} keyExtractor={item => item.key} ListFooterComponent={() => <View style={{ lineHeigth: 90 }}><Text>没有了</Text></View>} style={{ height: 380 }} ></FlatList>
        </View>
      </View>
    );
  }
  _btnPre(){
    let dd=JSON.stringify(this.props)
    this.setState({
      log:dd
    })
    this.props.navigation.navigate('Details')
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    flexDirection: 'column',
    backgroundColor: '#f8f8f8'
  },
  headerTop:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'90%',
  },
  headerText:{
    fontSize: 18,
    color: '#333',
    lineHeight: 40,
  },
  searchView:{
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center',
    marginLeft:15,
    backgroundColor:'#f8f8f8',
    borderRadius:5

  },
  searchImg:{
    width:16,
    height:16,
    marginLeft:10,
    marginRight:10
  },
  searchInput:{
    height:30,
    width:"70%"
  },
  toolBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20,
    marginTop:20,
  },
  toolItem:{
    width:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    HomeChild: HomeChild
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  }
);
export default RootStack;
