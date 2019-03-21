const Index = r => require.ensure([], () => r(require('../page/usercenter/Index')), 'Index');
const userMain = r => require.ensure([], () => r(require('../page/usercenter/Main')), 'userMain');
const Center = r => require.ensure([], () => r(require('../page/usercenter/Center')), 'Center');
const Shoppingcart = r => require.ensure([], () => r(require('../page/usercenter/Shoppingcart')), 'Shoppingcart');
const User = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      title: '管理控制器',
      keepAlive: false
    },
    children:[
      { path:'/index', component:userMain},
      { path:'/index/center', component:Center},
      { path:'/index/shoppingcart', component:Shoppingcart},
    ]
  }
]
export default User
