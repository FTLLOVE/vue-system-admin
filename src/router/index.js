import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/dashboard'
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
					meta: { title: '基本表单' }
				},
				{
					path: 'editor',
					component: () => import('../pages/editor'),
					meta: { title: '富文本编辑器' }
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
					path: 'icon',
					component: () => import('../pages/icon'),
					meta: { title: '自定义图标' }
				},
				{
					path: 'charts',
					component: () => import('../pages/charts'),
					meta: { title: 'schart图表' }
				},
				{
					path: 'i18n',
					component: () => import('../pages/i18n'),
					meta: { title: '国际化功能' }
				}

			]
		},
		{
			path: '/login',
			component: () => import('../pages/login'),
			meta: { title: '登录' }
		}
	]
})