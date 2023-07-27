<template>
	<main class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen">
		<InvoiceSetup />
		<invoiceModal @close="handleModalClose" />
	</main>
</template>

<script setup>
import invoiceModal from '../components/invoiceModal.vue'

function handleModalClose() {
  showModal.value = false
}
</script>

<style scoped>
.btn{
	@apply text-white bg-primary py-4 px-4  rounded border border-gray-200 text-sm font-medium
}
</style>
