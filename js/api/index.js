import axios from 'axios';

import NavigationService from '../utily/NavigationService.js';
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
         } else if (res.data.code === '5000') {
           //登录失效
           NavigationService.navigate('Sign');
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
        } else if(res.data.code === '5000') {
          //登录失效
          NavigationService.navigate('Sign');
        }else{
          console.log(res, 'resError')
        }
    }catch(err){
      console.log(err,'errError')
    }

  }

} 

export default new Http();