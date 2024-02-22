<script lang="ts">
import { Post } from '../Type'

export default {
	props: {
		posts: Array<Post>,
	},
}
</script>
<template>
	<div v-for="post in posts" class="grid">
		<div>
			{{ post.id }}
			<br />{{ post.title }} <br />{{ post.body }}
		</div>
	</div>
</template>
<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(1fr 3);
}
</style>
