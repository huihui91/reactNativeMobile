#### 仿写公司H5项目
##调用接口都是展示页面，不涉及公司业务##

###### 使用axios创建实例，调用接口

`
import axios from 'axios';

class Http {
  constructor(){
    axios.defaults.baseURL ="http://i.houguanfin.com/loan-manager/loan/";
    axios.defaults.timeout = 100000
  }
  async Get(url, resData = {}){
    try{
      let res = await axios.get(url, {
            params: resData
          });
         if (res.data.code === '000000') {
            return res.data.data;
          } else {
            console.log(res, 'resError')
          }

    }catch(err){
      console.log(err,'errError')
    }

  }
 
  async Post(url, params={}){
    try{
      let res = await axios.post(url, params);
        if (res.data.code === '000000') {
          return res.data.data;
        } else {
          console.log(res, 'resError')
        }
    }catch(err){
      console.log(err,'errError')
    }

  }
} 
export default new Http();
`

######  使用reactnavigation3做路由跳转
`
const AppStack = createStackNavigator({
    TabNavigator: TabNavigator,
    List: List,
    Product: Product,
    ThirdPage: ThirdPage
},{
    initialRouteName: 'TabNavigator',
});

const AuthStack = createStackNavigator({ LoginOut: LoginOut}); //登录



const RootComponent = createSwitchNavigator({
    AuthLoading,
    AppStack,
    AuthStack,
    Sign

},{
    initialRouteName:'AppStack',
     headerMode: 'float'

})
export default createAppContainer(RootComponent);

`
## createAppContainer 只能调用一次 ##


###### 使用  react-native init指令创建项目
` react-native init 项目名称
`

###### 创建js文件夹用于存放js文件
`
 --api 用于存放axios的设置
 --assets 用于存放静态资源
 --page存放各个组要Component
 --component 存放公共组件
 --utily存放本地公共方法
`
