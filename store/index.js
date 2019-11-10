import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
 state : {
  openId : "",
  token:'lakdjflajlvnladjf',
  userInfo:{
	  username:'',
	  email:'',
	  lab:'计算机视觉与模式识别实验室>'
  },
  labId:''
 },
 mutations : {
	setOpenId(state,openId){
		state.openId = openId;
	},
	changelab(state,lab){
		state.userInfo.lab = lab;
	},
	changeEmail(state,email){
		state.userInfo.email = email;
	},
	changeName(state,name){
		state.userInfo.username = name;
	},
	changeLabId(state,id) {
		state.labId = id;
	}
 }
});
export default store