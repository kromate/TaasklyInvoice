<template>
	<div>
		<TestComp />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'auth',
	middleware: ['hello-world']
})
</script>

<style scoped></style>
