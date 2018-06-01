import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const manage = r => require.ensure([], () => r(require('@/cms/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/cms/home')), 'home');
const userList = r => require.ensure([], () => r(require('@/cms/userList')), 'userList');
const userCategory = r => require.ensure([], () => r(require('@/cms/userCategory')), 'userCategory');

const routes = [
    {
      	path: '/',
      	component: manage
    },
    {
    	path: '/manage',
    	component: manage,
      name: '',
      children: [{
        path: '',
        component: home,
        meta: []
      },{
        path: '/userList',
        component: userList,
        meta: ['用户管理','用户列表']
      },{
        path: '/userCategory',
        component: userCategory,
        meta: ['用户管理','用户分类']
      }]
    }
  ]

export default new Router({
  	mode: 'history',
  	routes
})
