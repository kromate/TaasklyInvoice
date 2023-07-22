<template>
	<div>
		<invoiceModal v-if="showModal" @close="handleModalClose" />

		<div class="flex justify-center items-center min-h-screen">
			<v-button type="sec" @click="openModal">
				Open Modal
			</v-button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import VButton from '../components/v-button.vue'
import invoiceModal from '../components/invoiceModal.vue'

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function handleModalClose() {
  showModal.value = false
}
</script>

<style scoped></style>
