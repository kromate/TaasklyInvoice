<template>
<<<<<<< HEAD
	<div>
		<invoiceModal v-if="showModal" @close="handleModalClose" />

		<div class="flex justify-center items-center min-h-screen">
			<button type="pry" class="btn " @click="openModal">
				Open Modal
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
// import VButton from '../components/v-button.vue'
=======
	<main class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen">
		<InvoiceSetup />
		<invoiceModal @close="handleModalClose" />
	</main>
</template>

<script setup>
>>>>>>> 0d98ca9ef7c613150bdec503d959273c37126bc9
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
