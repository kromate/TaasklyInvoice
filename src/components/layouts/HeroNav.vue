<template>
	<header class="container flex items-center justify-between py-8 md:px-0 px-4 bg-transparent">
		<nuxt-link to="/">
			<img src="/lt.svg" alt="logo" class=" md:w-auto w-32">
		</nuxt-link>

		<div class="flex gap-4 items-center">
			<a href="https://github.com/Taaskly/Taaskly-invoicer" target="_blank" class="text-sm font-semibold leading-6 text-dark">⭐️ Star on Github </a>
			<nuxt-link to="/invoice" class="btn-primary hidden md:flex">
				Get Started
			</nuxt-link>
		</div>
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-primary{
@apply text-sm px-5 py-3 md:text-base md:px-10
}
</style>
