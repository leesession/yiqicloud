const Error = [
  { path: '/404', component: r => require.ensure([], () => r(require('../error/E404')), 'E404')},
  { path: '/500', component: r => require.ensure([], () => r(require('../error/E500')), 'E500')},
  { path: '*', redirect: '/404', hidden: true }
]
export default Error
