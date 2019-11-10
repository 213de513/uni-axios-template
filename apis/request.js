/*
* 所有请求的方法 也可以按模块划分
*/
import {handleRequest} from '../service/baseService.js';
import API from '../service/api.config.js';

//请求邮件
export function SEND_EMAIL(params){
	handleRequest(API.SEND_EMAIL,params);
}

