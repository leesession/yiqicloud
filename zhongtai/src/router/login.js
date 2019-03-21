const Login = r => require.ensure([], () => r(require('../page/login/Login')), 'Login');
const Register = r => require.ensure([], () => r(require('../page/login/Register')), 'Register');

const LoginOperate = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]
export default LoginOperate
