import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MainPage from "../page/mainPage.js";
import Icon from 'react-native-vector-icons/Ionicons';



export default class Navigation extends Component{
    constructor(props){
      super(props)
      this.state={
        selectedTab: 'home',
        tabName: ['首页', '发现', '消息', '我'],
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9',
        homeUrl:'',
        homeSelected:'',
        searchUrl:'',
        searchSelected:''
      }
    }
    render(){
      const { tabName, selectedColor} = this.state;
      return(
       <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title={tabName[0]}
            selectedTitleStyle={{ color: selectedColor }}
            renderIcon={() => <Image style={styles.tab} source={this.state.homeUrl} />}
            renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
            badgeText="2"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {<MainPage></MainPage>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title={tabName[1]}
            selectedTitleStyle={{ color: selectedColor }}
            renderIcon={() => <Image style={styles.tab} source={this.state.searchUrl} />}
            renderSelectedIcon={() => <Image style={styles.tab} source={this.state.searchSelected} />}
            onPress={() => this.setState({ selectedTab: 'search' })}>
            {<MainPage></MainPage>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'news'}
            title={tabName[2]}
            selectedTitleStyle={{ color: selectedColor }}
            renderIcon={() => <Image style={styles.tab} source={this.state.newsUrl} />}
            renderSelectedIcon={() => <Image style={styles.tab} source={this.state.newsSelected} />}
            onPress={() => this.setState({ selectedTab: 'news' })}>
            {<MainPage></MainPage>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title={tabName[3]}
            selectedTitleStyle={{ color: selectedColor }}
            renderIcon={() => <Image style={styles.tab} source={this.state.myUrl} />}
            renderSelectedIcon={() => <Image style={styles.tab} source={this.state.mySelected} />}
            onPress={() => this.setState({ selectedTab: 'my' })}>
            {<MainPage></MainPage>}
          </TabNavigator.Item>
        </TabNavigator> 
      )
    }

  componentWillMount(){
   const { normalColor, selectedColor}=this.state;
    Icon.getImageSource('md-home', 50, normalColor).then((source) =>{
      console.log(source,'sourceImg')
      return this.setState({ homeUrl: source })
    }
     );
    Icon.getImageSource('md-home', 50, selectedColor).then((source) => this.setState({ homeSelected: source }));
    Icon.getImageSource('md-compass', 50, normalColor).then((source) => this.setState({ searchUrl: source }));
    Icon.getImageSource('md-compass', 50, selectedColor).then((source) => this.setState({ searchSelected: source })); 
    Icon.getImageSource('md-notifications', 50, normalColor).then((source) => this.setState({ newsUrl: source }));
    Icon.getImageSource('md-notifications', 50, selectedColor).then((source) => this.setState({ newsSelected: source })); 
    Icon.getImageSource('md-person', 50, normalColor).then((source) => this.setState({ myUrl: source }));
    Icon.getImageSource('md-person', 50, selectedColor).then((source) => this.setState({ mySelected: source })); 
  }

}

const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  tabStyle: {
    padding: 8
  },
  tab: {
    width: 22,
    height: 22
  }
});