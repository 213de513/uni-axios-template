
const API = {
	SEND_EMAIL:{
		url:'/user/sendMail',
		method:'post',
		desc:'发送邮件'
	},
	VALIDATE_EMAIL:{
		url:'/user/validateMail',
		method:'get',
		desc:'判断邮件是否合法'
	}
}
export default API;
