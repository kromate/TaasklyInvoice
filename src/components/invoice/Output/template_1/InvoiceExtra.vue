<template>
	<article class="grid grid-cols-2 my-16  gap-16">
		<section class="flex flex-col gap-4">
			<div v-if="formExtraData.notes.note.value" class="flex flex-col w-full">
				<p class="text-sm font-bold">
					Note:
				</p>
				<p class="text-sm w-full">
					{{ formExtraData.notes.note.value }}
				</p>
			</div>
			<div v-if="formExtraData.notes.t_n_c.value" class="flex flex-col w-full">
				<p class="text-sm font-bold">
					Terms & condition:
				</p>
				<p class="text-sm w-full">
					{{ formExtraData.notes.t_n_c.value }}
				</p>
			</div>
		</section>

		<section class="flex flex-col items-end gap-2 text-right">
			<!-- <div v-if="formExtraData.extra_fees.tax.value" class="flex-inline">
				<p class="font-bold">
					TAX : -
				</p>
				<p class="text-sm">
					{{ formExtraData.extra_fees.tax.value }}
				</p>
			</div> -->
			<div v-if="formExtraData.extra_fees.delivery.value" class="flex-inline">
				<p class="font-bold left">
					Delivery :
				</p>
				<p class="text-sm">
					{{ convertToCurrency(formExtraData.extra_fees.delivery.value) }}
				</p>
			</div>
			<div v-if="formExtraData.extra_fees.discount.value" class="flex-inline">
				<p class="font-bold left">
					Discount :
				</p>
				<p class="text-sm">
					{{ convertToCurrency(formExtraData.extra_fees.discount.value) }}
				</p>
			</div>
			<div class="flex-inline mt-4">
				<p class="text-lg font-bold left">
					Total :
				</p>
				<p class="text-lg font-bold">
					{{ convertToCurrency(total.value) }}
				</p>
			</div>
		</section>
	</article>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/create'
import { convertToCurrency } from '@/composables/utils'
const { total, formExtraData } = useCreateInvoice()
</script>

<style scoped>
.flex-inline{
	@apply grid grid-cols-2 gap-2 items-center justify-between w-full
}
.left{
	@apply w-20 text-right
}
</style>
