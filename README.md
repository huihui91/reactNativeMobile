#### 仿写公司H5项目
##调用接口都是展示页面，不涉及公司业务##

###### 使用axios创建实例，调用接口

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
