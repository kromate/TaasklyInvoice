<template>
	<table class="table-auto w-full mt-12">
		<caption class="caption-top text-left text-sm  font-bold">
			Invoice Detail
		</caption>
		<thead>
			<tr
				class="border-separate border-spacing-2 border-b border-t "
			>
				<th class="text-left py-2  font-medium">
					Description
				</th>
				<th class="text-left  font-medium">
					Price
				</th>
				<th class="text-left  font-medium">
					Qty
				</th>
				<th class="text-right  font-medium">
					Total Amount
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in formattedList" :key="item.id">
				<td class="pt-2">
					{{ item.item }}
				</td>
				<td>{{ item.quantity }}</td>
				<td>{{ convertToCurrency(item.price) }}</td>

				<td class="text-right">
					{{ convertToCurrency(item.quantity * item.price) }}
				</td>
			</tr>

			<tr
				class="border-separate border-spacing-2 border-b border-t"
			>
				<td class="py-2 font-bold">
					Sub Total
				</td>
				<td class="font-bold text-right" colspan="3">
					{{ convertToCurrency(subTotal()) }}
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

</style>
