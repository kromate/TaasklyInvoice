
<template>
	<form class="flex flex-col" @submit.prevent="step++">
		<h4 class="form-title">
			<span>Form colors</span>
			<div class="flex items-center gap-2 md:gap-4">
				<span class="text-xs cursor-pointer text-grey_two" @click="formCustomisationData.color_mode.value = !formCustomisationData.color_mode.value">
					({{ formCustomisationData.color_mode.value ? 'Color Picker':'Hex Code' }})
				</span>
				<button class="text-sm text-dark" type="button" @click="resetColors">
					Reset
				</button>
			</div>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="bg">Background Color</label>
				<input
					id="bg"
					v-model="formCustomisationData.background_color.value"
					placeholder="Select background color"
					:type="formCustomisationData.color_mode.value ? 'color':'text'"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="tx">Text Color

				</label>
				<input
					id="tx"
					v-model="formCustomisationData.text_color.value"
					placeholder="Select text color"
					:type="formCustomisationData.color_mode.value ? 'color':'text'"
					class="input-field"
					required
				>
			</div>
		</div>
		<h4 class="form-title">
			<span>Form Logo</span>
			<button class="text-sm text-dark" type="button" @click="resetLogo">
				Reset
			</button>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="logo">Select Logo</label>
				<label for="logo" class="justify-start cursor-pointer input-field center">{{ formCustomisationData.logo.logoName.value }}</label>
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
			<button class="text-sm text-dark" type="button" @click="resetFont">
				<Spinner v-if="loadingFontLink" size="20px" />
				<span v-else>Reset</span>
			</button>
		</h4>
		<div class="grid grid-cols-1 gap-4 my-4">
			<div class="field">
				<label for="logo">Select Logo</label>
				<SuggestionInput v-model="formCustomisationData.font_family.value" :options="fonts" :loading="loadingFontLink" placeholder="Select Font" />
			</div>
		</div>
		<button class="mt-12 modal-btn" type="submit">
			Continue
		</button>
	</form>
</template>

<script setup lang="ts">
import { useCreateInvoice, useGoogleFont, useFormUsage } from '@/composables/invoice/index'

const { formCustomisationData, resetColors, resetLogo, resetFont } = useCreateInvoice()
const { step } = useFormUsage()
const { fonts, loadingFontLink } = useGoogleFont()

const updateLogo = (e: any) => {
	const file = e.target.files[0]
	formCustomisationData.logo.logoName.value = file.name
	const reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onload = () => {
		formCustomisationData.logo.url.value = reader.result as any
	}
}

</script>

<style scoped>
label{
	@apply flex justify-between items-center w-full
}
</style>
