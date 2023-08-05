<template>
	<footer id="attribution" class="absolute bottom-4 right-3 z-[1000000]" :style="formStyles">
		Powered by Taaskly
	</footer>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/create'

const { formCustomisationData } = useCreateInvoice()

const formStyles = computed(() => {
	return `color:${formCustomisationData.text_color.value};
			font-family: ${formCustomisationData.font_family.value} !important;
			`
})
</script>

<style scoped>

</style>
