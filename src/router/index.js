import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const manage = r => require.ensure([], () => r(require('@/cms/manage')), 'manage');

const routes = [
    {
      	path: '/',
      	component: manage
    },
    {
    	path: '/manage',
    	component: manage
    }
  ]

export default new Router({
  	mode: 'history',
  	routes
})
