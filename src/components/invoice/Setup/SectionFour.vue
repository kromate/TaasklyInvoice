
<template>
	<form class="flex flex-col" @submit.prevent="DownloadOutput">
		<h4 class="form-title">
			<span>Bill From</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="from_name">Name</label>
				<input
					id="from_name"
					v-model="formInfoData.from.name.value"
					placeholder="Enter name"
					type="text"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="from_address">Address</label>
				<input
					id="from_address"
					v-model="formInfoData.from.address.value"
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
				<label for="to_name">Name</label>
				<input
					id="to_name"
					v-model="formInfoData.to.name.value"
					placeholder="Enter name"
					type="text"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="to_address">Address</label>
				<input
					id="to_address"
					v-model="formInfoData.to.address.value"
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
				<label for="logo">Issued On</label>
				<DateInput v-model="formInfoData.dates.issued.value" :disabled-date="()=>false" />
			</div>
			<div class="field">
				<label for="logo">Due On</label>
				<DateInput v-model="formInfoData.dates.due.value" :disabled-date="()=>false" />
			</div>
		</div>
		<button class="modal-btn mt-12" type="submit">
			Download
		</button>
	</form>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/index'

const { formInfoData, DownloadOutput } = useCreateInvoice()

</script>

<style scoped>

</style>
