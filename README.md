# uni-axios-template
uni app 二次封装 可以clone下来然后放到需要的uni-app项目里 

## 文件夹介绍

**plugin**
>引用的uni-app插件 luch-request 
地址：[lunch-request](https://ext.dcloud.net.cn/plugin?id=392)

**apis**
>http.js axios的二次封装 内含基本设置、请求|响应拦截器。
>request.js 请求管理，现在是放在一起  可以自行模块化管理。

**service**
>api.config.js 接口地址统一管理文件。
>baseService.js post、get请求实现文件

**store**
>uni-app内置了 vuex，用来存储token和其他状态

## 使用方法 
1. 在api.config.js中设置接口地址及方法。
```
  SEND_EMAIL:{
		url:'/user/sendMail',
		method:'post',
		desc:'发送邮件'
	}
```
2. 在request.js中设置请求方法并暴露出去。（直接引用对应API.xxx即可，无需其他设置。）
```
export function SEND_EMAIL(params){
	handleRequest(API.SEND_EMAIL,params);
}
```
3. 在需要异步请求的地方引用方法
假如在my.vue中需要发送邮件请求 
```
    import {SEND_EMAIL} from 'request.js所在的目录'
```
在method中定义请求方法(共两种用法)
```
    //同步方法 async await
    async send(){
        let params = {};
        params.id = 'aaa';
        try(){
            let res = await SEND_EMAIL(params);
            console.log(res);
        }catch(e){
            throw e;
        }
    }
```

----

```
    //异步方法 promise
    send(){
        let params = {};
        params.id = 'aaa';
        SEND_EMAIL(params).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
```

