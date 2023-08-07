<template>
	<table class="w-full mt-12">
		<caption class="text-left text-sm  font-bold mb-4">
			Invoice Detail
		</caption>
		<thead>
			<tr
				class="font-black border-y"
			>
				<th>
					Description
				</th>
				<th>
					Price
				</th>
				<th>
					Qty
				</th>
				<th class="!text-right">
					Total Amount
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in formattedList" :key="item.id" class="h-10 pb-4">
				<td>
					{{ item.item }}
				</td>
				<td>{{ item.quantity }}</td>
				<td>{{ convertToCurrency(item.price) }}</td>

				<td class="!text-right">
					{{ convertToCurrency(item.quantity * item.price) }}
				</td>
			</tr>

			<tr
				class="border-y mt-8 "
			>
				<td class="font-bold up">
					Sub Total
				</td>
				<td class="font-bold !text-right up" colspan="3">
					{{ convertToCurrency(subTotal) }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/index'
import { convertToCurrency } from '@/composables/utils'

const { formListData, subTotal } = useCreateInvoice()

const formattedList = computed(() => {
	return formListData.value.filter((item) => item.item)
})
</script>

<style scoped>

th, .up{
	@apply h-10 text-left
}
.set{
	@apply  items-center
}
</style>
