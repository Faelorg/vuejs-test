import { createApp } from 'vue'
import './style.css'
import Home from './components/Home.vue'
import Authorization from './components/Authorization.vue'
import Cabinet from './components/Cabinet.vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	routes: [
		{
			path: '/',
			component: Home,
		},

		{
			path: '/auth',
			component: Authorization,
		},

		{
			path: '/cabinet',
			component: Cabinet,
		},
	],
	history: createWebHistory(),
})

createApp(App).use(router).use(VueCookies, { expires: '7d' }).mount('#app')
