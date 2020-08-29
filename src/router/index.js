import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/',
			component: () => import('../components/Home.vue'),
			meta: { title: 'home' },
			children: [
				{
					path: 'dashboard',
					component: () => import('../pages/dashboard'),
					meta: { title: '系统首页' }
				},
				{
					path: 'table',
					component: () => import('../pages/table'),
					meta: { title: '基本表格' }
				},
				{
					path: 'form',
					component: () => import('../pages/form'),
					meta: { title: '复杂表单' }
				},
				{
					path: 'form-detail',
					component: () => import('../pages/form-detail'),
					meta: { title: '表单详情' }
				},
				{
					path: 'markdown',
					component: () => import('../pages/markdown'),
					meta: { title: 'markdown编辑器' }
				},
				{
					path: 'upload',
					component: () => import('../pages/upload'),
					meta: { title: '文件上传' }
				},
				{
					path: 'charts',
					component: () => import('../pages/charts'),
					meta: { title: 'vchart图表' }
				},
			]
		},
		{
			path: '/login',
			component: () => import('../pages/login'),
			meta: { title: '登录' }
		}
	]
})