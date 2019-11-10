import http from '../apis/http.js';

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params) {
	return new Promise((resolve, reject) => {
		http.post(url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
	return new Promise((resolve, reject) => {
		http.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}
/**
 * 核心处理方法  可以后续往里填请求
 */
function handleRequest(obj,params={}) {
	const url = obj.url;
	const method = obj.method;
	const desc = obj.desc;
	if(method==='get'){
		get(url,params);
	}else if(method==='post'){
		post(url,params);
	}
	console.log('执行请求-->'+desc);
}

export {handleRequest} 