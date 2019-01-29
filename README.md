#### 仿写公司H5项目
##调用接口都是展示页面，不涉及公司业务##

###### 使用axios创建实例，调用接口

 ```
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
 ```

######  使用reactnavigation3做路由跳转
 ```
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

 ```
## createAppContainer 只能调用一次 ##


###### 使用  react-native init指令创建项目
 ``` react-native init 项目名称
 ```


###### 在utily 文件下封装了px转Dp方法
 ```
import { Dimensions } from 'react-native';

// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 375
const uiWidthPx =375;

function pxToDp(uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx;
}

export default pxToDp;
 ```

##### 使用 react navigation中的 NavigationActions 做登录校验，登录失败后跳转到登录页

-- 在utily中的封装方法
 ```
import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};
 ```

--在App.js中将navigation注入到上面的js中
 ```
  <AppContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}></AppContainer>
            
 ```

###### 创建js文件夹用于存放js文件
 ```
 --api 用于存放axios的设置
 --assets 用于存放静态资源
 --page存放各个组要Component
 --component 存放公共组件
 --utily存放本地公共方法
 ```
