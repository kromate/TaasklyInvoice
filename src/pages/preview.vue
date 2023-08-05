<template>
	<main class="grid md:grid-cols-2 gap-4 p-4 h-screen bg-light">
		<button class="btn-primary z-[999999]  absolute text-sm top-4 right-4 border-2 border-secondary" @click="$router.back()">
			Go back
		</button>
		<InvoiceOutput :hide-on-small-screens="false" />
	</main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
