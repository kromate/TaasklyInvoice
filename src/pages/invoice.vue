<template>
	<main class="grid h-screen gap-4 p-4 md:grid-cols-2 bg-light">
		<ClientOnly>
			<InvoiceSetup />
			<InvoiceOutput />
		</ClientOnly>
	</main>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'invoice'
})
</script>

<style scoped>

</style>
