import Request from '../js_sdk/luch-request/request.js'
import {BASE_URL} from './index.js'
import store from '../store/index.js';
const http = new Request();

http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = BASE_URL; 
    return config
})
/*
请求拦截器  可在这里设置token
*/
http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
    const token = store.state.token;  
	config.header = {
        ...config.header,
        Authorization : token
    }
    return config;
})
/*
响应拦截器  可在这里设置token
*/
http.interceptor.response((response) => { /* 对响应成功做点什么 （statusCode === 200），必须return response*/
// 服务器状态码是2开头的的情况
  console.log(response)
  return response
}, (err) => { /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
// 服务器状态码不是2开头的的情况
  console.log(err)
  return err;
})

export default http;


