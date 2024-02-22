<script lang="ts">
import { Post } from './Type'
import { IUser } from './Type'

let posts = Array<Post>

let users = [
	<IUser>{ login: 'user1', password: '123456', id: 1 },
	<IUser>{ login: 'user2', password: '123456', id: 2 },
	<IUser>{ login: 'user3', password: '123456', id: 3 },
	<IUser>{ login: 'user4', password: '123456', id: 4 },
	<IUser>{ login: 'user5', password: '123456', id: 5 },
]

let user: IUser = <IUser>{}

export default {
	data() {
		return {
			posts,
			users,
			user,
		}
	},

	async created() {
		let obj = await fetch('https://jsonplaceholder.typicode.com/posts/')
		let json = await obj.json()
		this.posts = json

		this.user = this.$cookies.get('user')
		console.log(user)
	},
}
</script>

<template>
	<header>
		<router-link v-if="user.login == null || user.login == ''" to="/auth"
			>Авторизоваться</router-link
		>

		<router-link v-else to="/cabinet">{{ user.login }}</router-link>
	</header>
	<router-view :users="users" :posts="posts" v-bind:user="user"></router-view>
</template>

<style scoped></style>
