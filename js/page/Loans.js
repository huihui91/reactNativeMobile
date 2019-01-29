import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView,StyleSheet} from 'react-native'
import Http from '../api/index.js'

import SwiperIcons from '../component/SwiperIcons.js';
import SwiperNews from '../component/SwiperNews.js';
import HotLoan from '../component/HotLoan.js'
import Icon from 'react-native-vector-icons/Ionicons';




export default class Loans extends Component {
  static navigationOptions = {
    title: '借款',
  }
  constructor(props) {
    super(props);
    this.state={
      hotProList:[],
      amountList:[]
    }
  }
  componentDidMount(){
    this._HotProduct();
    this._amountRange()
  }
  render() {
    const { hotProList, amountList} =this.state;
    return (
      <View style={styles.flex1}>
        <View style={styles.headBg}>
          <Text style={styles.headText}>贷款超市</Text>
        </View>
        <View>
          <SwiperIcons></SwiperIcons>
        </View>
        <View style={styles.icons}>
          <Icon style={styles.marRig20} name="md-mail" size={30} color="#4F8EF7" />
          <SwiperNews></SwiperNews>
          <Icon style={ styles.marRig20} name="md-arrow-dropright" size={30} color="#4F8EF7" />
        </View>
        <View style={styles.scrollView}>
          <ScrollView horizontal={true} style={styles.scrollStyle}>
            {
              amountList.map((item,index)=>{
                return(
                  <View style={styles.scrollItemView} key={index} >
                    <Image source={{ uri:item.label_icon_url }} style={styles.scrollImg} />
                    <Text style={styles.scrollText}>{item.label_name}</Text>
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

  async _amountRange(){
    let data = await Http.Post('label/getHomeLabelMessage',{
      biz_account_source: "2",
      index_show: "1",
      label_type: "1",
      pageNumber: "1",
      pageSize: "100"
    });
    let amountList=data.aaData;
    this.setState({
      amountList
    })
  }
}

const styles = StyleSheet.create({
  flex1: { 
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f8f8f8' 
  },
  headBg:{ 
    width: '100%', 
    backgroundColor: '#fff', 
    paddingRight: 20, 
    paddingLeft: 20 
  },
  headText:{ 
    lineHeight: 40, 
    color: '#333', 
    fontSize: 16 
  },
  icons: { 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    paddingRight: 20, 
    paddingLeft: 20, 
    width: '100%' 
  },
  marRig20: { 
    marginRight: 20 
  },
  scrollView: { 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    width: '100%', 
    paddingRight: 20, 
    paddingLeft: 10 
  },
  scrollStyle: { 
    height: 105, 
    marginTop: 10 
  },
  scrollItemView: 
  { height: 95, 
    width: 95, 
    alignItems: 'center', 
    marginLeft: 10 
  },
  scrollImg: { 
    height: 80, 
    width: 96, 
    borderRadius: 5 
  },
  scrollText: { 
    marginTop: 5, 
    fontSize: 12, 
    color: '#7a818b' 
  }
})