<template>
	<form class="flex flex-col" @submit.prevent="DownloadOutput">
		<h4 class="form-title">
			<span>Extra Fees</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="from_name">Delivery (NGN)</label>
				<input
					id="from_name"
					v-model="formExtraData.extra_fees.delivery.value"
					placeholder="Enter price"
					type="number"
					class="input-field"
				>
			</div>

			<div class="field">
				<label for="from_address">Discount (NGN)</label>
				<input
					id="from_address"
					v-model="formExtraData.extra_fees.discount.value"
					placeholder="Enter Discount"
					type="number"
					class="input-field"
				>
			</div>
			<div class="field">
				<label for="from_address">Tax (%)</label>
				<input
					id="from_address"
					v-model="formExtraData.extra_fees.tax.value"
					placeholder="Enter Amount"
					type="number"
					class="input-field"
					required
				>
			</div>
		</div>

		<h4 class="form-title">
			<span>File Name</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="to_name">Name</label>
				<input
					id="to_name"
					v-model="formExtraData.file.name.value"
					placeholder="Enter File name"
					type="text"
					class="input-field"
					required
				>
			</div>
			<div class="field">
				<label for="to_address">File Type</label>
				<select id="to_address" v-model="formExtraData.file.type.value" name="" class="input-field">
					<option value="IMG">
						Image
					</option>
					<option value="PDF">
						PDF
					</option>
				</select>
			</div>
		</div>

		<h4 class="form-title">
			<span>Extra Notes</span>
		</h4>
		<div class="form-flex">
			<div class="field">
				<label for="logo">Note</label>
				<textarea v-model="formExtraData.notes.note.value" class="input-field" rows="5" />
			</div>
			<div class="field">
				<label for="logo">T & C</label>
				<textarea v-model="formExtraData.notes.t_n_c.value" class="input-field" rows="5" />
			</div>
		</div>
		<button class="modal-btn mt-12" type="submit">
			Download
		</button>
	</form>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/index'

const { formExtraData, DownloadOutput } = useCreateInvoice()

</script>

<style scoped>
textarea {
	@apply p-4 h-auto
}
</style>
