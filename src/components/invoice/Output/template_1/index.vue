
<template>
	<div id="output" class="w-full h-auto min-h-full p-4" :style="formStyles">
		<header class="flex gap-2 items-center border-b border-gray-300 pb-4">
			<img :src="formCustomisationData.logo.url.value" alt="logo" :style="logoStyle">
		</header>
		<InvoiceInfo />
		<InvoiceList />
	</div>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/create'

const { formCustomisationData } = useCreateInvoice()

const formStyles = computed(() => {
	return `background: ${formCustomisationData.background_color.value}; 
			color:${formCustomisationData.text_color.value};
			font-family: ${formCustomisationData.font_family.value} !important;
			`
})
const logoStyle = computed(() => {
	return `width: ${formCustomisationData.logo.width.value}%;`
})
</script>

<style scoped>

</style>
