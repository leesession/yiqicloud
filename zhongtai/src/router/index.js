import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from './user'//用户中心
import Login from './login'//登录-注册-找回密码
import Error from './error'//错误页

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '任务规则',
        keepAlive: false
      }
    },
    ...User,
    ...Login,
    ...Error,
  ]
})
