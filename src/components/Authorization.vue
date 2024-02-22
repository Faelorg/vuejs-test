<script lang="ts">
import { IUser } from '../Type'
import { PropType } from 'vue/dist/vue.js'

export default {
	props: {
		users: Array<IUser>,
		user: <PropType<IUser>>{},
	},

	data() {
		return {
			id: this.users!.length + 1,
			login: '',
			password: '',
		}
	},

	methods: {
		SignUp(login: string, password: string) {
			if (login != '' && password != '') {
				if (!this.users!.find(u => u.login == login)) {
					let u = <IUser>{ login: login, password: password, id: this.id }
					this.users!.push(u)
					this.$cookies.set('user', u)
					this.$router.push(`/cabinet/${u.id}`)
				}
			}
		},
		SignIn(login: string, password: string) {
			if (login != '' && password != '') {
				let user = this.users!.find(
					u => u.login == login && u.password == password
				)
				if (user) {
					this.$cookies.set('user', user)
					this.$router.push(`/cabinet/${user.id}`)
				}
			}
		},
	},
}
</script>
<template>
	<div class="form">
		<h2>Авторизоваться</h2>
		<label>Логин</label>
		<input type="text" v-model="login" />
		<label>Пароль</label>
		<input type="password" v-model="password" />

		<div class="btnForm">
			<button @click="SignUp(login, password)">Зарегистрироваться</button>
			<button @click="SignIn(login, password)">Войти</button>
		</div>
	</div>
</template>
<style scoped>
.form {
	display: grid;
	justify-content: center;
	gap: 5px;
}
.btnForm {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
}

button {
	padding: 10px;
}
</style>
