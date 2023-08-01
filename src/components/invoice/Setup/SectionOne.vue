
<template>
	<form class="flex flex-col" @submit.prevent="step++">
		<h4 class="form-title">
			<span>Form colors</span>
			<button class="text-dark text-sm" type="button" @click="resetColors">
				Reset
			</button>
		</h4>
		<div class="form-flex">
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
		<h4 class="form-title">
			<span>Form Logo</span>
			<button class="text-dark text-sm" type="button" @click="resetLogo">
				Reset
			</button>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="logo">Select Logo</label>
				<label for="logo" class="input-field center cursor-pointer justify-start">{{ formCustomisationData.logo.logoName.value }}</label>
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

		<h4 class="form-title">
			<span>Form Font</span>
			<button class="text-dark text-sm" type="button" @click="resetFont">
				<Spinner v-if="loadingFontLink" size="20px" />
				<span v-else>Reset</span>
			</button>
		</h4>
		<div class="grid grid-cols-1 gap-4 my-4">
			<div class="field">
				<label for="logo">Select Logo</label>
				<SuggestionInput v-model="formCustomisationData.font_family.value" :options="fonts" :loading="loading || loadingFontLink" placeholder="Select Font" />
			</div>
		</div>
		<button class="modal-btn mt-12" type="submit">
			Continue
		</button>
	</form>
</template>

<script setup lang="ts">
import { useCreateInvoice, useGoogleFont, useFormUsage } from '@/composables/invoice/index'

const { formCustomisationData, resetColors, resetLogo, resetFont } = useCreateInvoice()
const { step } = useFormUsage()
const { loading, fonts, getFonts, loadingFontLink } = useGoogleFont()

const updateLogo = (e: any) => {
	const file = e.target.files[0]
	formCustomisationData.logo.logoName.value = file.name
	const reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onload = () => {
		formCustomisationData.logo.url.value = reader.result
	}
}
onMounted(() => {
	getFonts()
})

</script>

<style scoped>

</style>
