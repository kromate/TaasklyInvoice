
<template>
	<form class="flex flex-col" @submit="step++">
		<h4 class="form-title">
			<span>Bill From</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="bg">Name</label>
				<input
					id="bg"
					placeholder="Enter name"
					type="text"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="tx">Address</label>
				<input
					id="tx"
					placeholder="Location / Email / Phone"
					type="text"
					class="input-field"
					required
				>
			</div>
		</div>

		<h4 class="form-title">
			<span>Bill To</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="bg">Name</label>
				<input
					id="bg"
					placeholder="Enter name"
					type="text"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="tx">Address</label>
				<input
					id="tx"
					placeholder="Location / Email / Phone"
					type="text"
					class="input-field"
					required
				>
			</div>
		</div>

		<h4 class="form-title">
			<span>Dates</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="logo">Select Logo</label>
				<DateInput />
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
