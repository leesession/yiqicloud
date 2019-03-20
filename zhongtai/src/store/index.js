import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import 'es6-promise/auto'

const state={
  img:'http://xfhwx.xiufanghua.com/social/Public/portrait/87/20180321034509286.jpg',
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
};//状态

const mutations={
  // 修改token，并将token存入localStorage
  changeLogin (state, user) {
    console.log(user)
    state.Authorization = user.Authorization;
    localStorage.setItem('Authorization', user.Authorization);
  }
};//同步

const getters={

};//相当于过滤器

const actions={

}//异步调用mutation中的方法


export default new Vuex.Store({
  state,mutations,actions,getters
})

