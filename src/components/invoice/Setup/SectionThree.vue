<template>
	<form class="flex flex-col" @submit.prevent="step++">
		<h4 class="form-title mb-4">
			<span>Form List</span>
		</h4>

		<table class="table-auto w-full overflow-x-clip">
			<thead class="text-xs font-semibold uppercase text-dark bg-light border border-dark">
				<tr class="font-semibold text-left">
					<th class="w-[260px]">
						Item
					</th>
					<th class="w-[90px]">
						Quantity
					</th>
					<th class="w-[150px]">
						Price
					</th>
					<th class="w-[150px]">
						Amount
					</th>
					<th class="w-[15px]">
						<span class="font-semibold text-left" />
					</th>
				</tr>
			</thead>

			<tbody class="text-sm">
				<tr v-for="item in formListData" :key="item.id">
					<td>
						<input v-model="item.item" required type="Enter Item" class="input-field" placeholder="Item">
					</td>
					<td>
						<input v-model="item.quantity" required type="number" class="input-field" placeholder="Qty">
					</td>
					<td>
						<input v-model="item.price" required type="text" class="input-field" placeholder="Enter Price">
					</td>
					<td>
						<div class="input-field center !justify-start" placeholder="Amount">
							<span v-if=" item.quantity && item.price ">
								{{ item.quantity * item.price }}
							</span>
							<span v-else>
								Amount
							</span>
						</div>
					</td>
					<td>
						<button v-if="formListData.length > 1" type="button" @click="removeItem(item.id)">
							<component :is="deleteIcon" class="w-6 rounded-full text-red border border-red p-0.5" />
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="w-full flex justify-start mt-3 font-bold">
			<button class="text-dark flex gap-2 items-center hover:bg-dark hover:text-light hover:btn transite" type="button" @click="addNewItem">
				<component :is="add" class="w-5" />
				Add New Item
			</button>
		</div>
		<div class="w-full flex justify-end mt-3 font-bold text-dark">
			<div class="w-1/2 flex justify-between">
				<span class="font-bold">Sub-total:</span>
				<span class="font-bold text-xl">{{ convertToCurrency(subTotal) }}</span>
			</div>
		</div>

		<button class="modal-btn mt-12" type="submit">
			Continue
		</button>
	</form>
</template>

<script setup lang="ts">
import add from '@/assets/icons/src/add.vue'
import deleteIcon from '@/assets/icons/src/delete.vue'
import { useCreateInvoice, useFormUsage } from '@/composables/invoice/index'
import { convertToCurrency } from '@/composables/utils'

const { formListData, addNewItem, removeItem, subTotal, DownloadOutput } = useCreateInvoice()
const { step } = useFormUsage()

</script>

<style scoped>
th {
	@apply py-4 px-2 whitespace-nowrap text-[14px] capitalize text-left ;
}

td {
	@apply py-4 px-2
}
</style>
