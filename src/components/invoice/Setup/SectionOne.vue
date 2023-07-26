
<template>
	<form class="flex flex-col">
		<h4 class="text-dark text-2xl font-bold">
			Form colors
		</h4>
		<div class="grid grid-cols-2 gap-4 my-4">
			<div class="field">
				<label for="bg">Background Color</label>
				<input
					id="bg"
					v-model="formCustomisationData.background_color.value"
					placeholder="Select background color"
					type="color"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="tx">Text Color</label>
				<input
					id="tx"
					v-model="formCustomisationData.text_color.value"
					placeholder="Select text color"
					type="color"
					class="input-field"
					required
				>
			</div>
		</div>
		<h4 class="text-dark text-2xl font-bold">
			Logo setup
		</h4>
		<div class="grid grid-cols-2 gap-4 my-4">
			<div class="field">
				<label for="logo">Select Logo</label>
				<label for="logo" class="input-field center cursor-pointer justify-start">{{ logoName }}</label>
				<input id="logo" type="file" class="hidden" @change="updateLogo($event)">
			</div>
			<div class="field">
				<label for="lw">Width</label>
				<input
					id="lw"
					v-model="formCustomisationData.logo.width.value"
					placeholder="Select text color"
					type="number"
					class="input-field"
					required
				>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/create'
const { formCustomisationData } = useCreateInvoice()
const logoName = ref('logo.png')
const updateLogo = (e: any) => {
	const file = e.target.files[0]
	logoName.value = file.name
	const reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onload = () => {
		formCustomisationData.logo.url.value = reader.result
	}
}
</script>

<style scoped>

</style>
