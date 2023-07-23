<template>
	<div class="flex items-center bg-gray-900 bg-opacity-50">
		<div
			class="container bg-white w-full px-2 pt-5 lg:px-4 min-h-screen rounded-lg text-center"
		>
			<div class="content">
				<div class="flex mt-2 justify-between">
					<p class="text-lg font-bold">
						{{ text }}
					</p>
					<span class="cursor-pointer" @click="handleModalClose">✖</span>
				</div>

				<div class="pt-5">
					<div class="flex justify-between items-center">
						<div>
							<h2 class="lg:text-2xl font-bold mb-4">
								Invoice <span class="text-primary font-bold">#NRjhkfjsfsfs</span>
							</h2>
						</div>

						<div class="flex items-center gap-2 font-bold text-gray-300 cursor-pointer">
							<chain-icon />
							<p class="">
								Copy Link
							</p>
						</div>
					</div>

					<h1 class="text-left font-bold pb-2 pt-3 text-xl">
						Details
					</h1>
					<div class="grid lg:grid-cols-2 gap-4">
						<div>
							<label class="block mb-2 text-left font-bold">Bill From</label>
							<input v-model="billFrom" type="text" class="input">
						</div>
						<div>
							<label class="block mb-2 text-left font-bold">Bill To</label>
							<input v-model="billTo" type="text" class="input">
						</div>
					</div>

					<div class="grid grid-cols-1 gap-4 pt-2">
						<div>
							<label class="block mb-2 text-left font-bold">Recipient Email</label>
							<input v-model="email" type="text" class="input">
						</div>
					</div>

					<div class="grid grid-cols-1 gap-4 pt-2">
						<div>
							<label class="block mb-2 text-left font-bold">Bill Title/Project Descriptions</label>
							<input v-model="title" type="text" class="input">
						</div>
					</div>

					<div class="grid lg:grid-cols-2 gap-4 pt-2">
						<div>
							<label class="block mb-2 text-left font-bold">Issued On</label>
							<input v-model="issuedOn" type="date" class="input">
						</div>
						<div>
							<label class="block mb-2 text-left font-bold">Due On</label>
							<input v-model="dueOn" type="date" class="input">
						</div>

						<label class="flex items-center space-x-2">
							<input
								v-model="isChecked"
								type="checkbox"
								class="form-checkbox h-5 w-5 text-[#01CC88] cursor-pointer transition"
							>
							<span class="text-sm font-medium text-gray-500 whitespace-nowrap">This is a recurring invoice (Monthly)</span>
						</label>
					</div>

					<h1 class="text-left font-bold pb-2 pt-5 text-xl">
						Invoice Item
					</h1>
					<div class="grid grid-cols-1 gap-4">
						<div>
							<label class="block mb-2 text-left font-bold">Currency</label>
							<input
								v-model="projectName"
								type="text"
								placeholder="Project Name"
								class="input"
							>
						</div>
					</div>

					<div>
						<table class="w-full text-left text-gray-500 mt-2">
							<!-- Table headers -->
							<thead class="">
								<tr class="grid grid-cols-11">
									<th scope="col" class="block col-span-4 mb-2 text-left font-bold">
										Item
									</th>
									<th scope="col" class="table">
										Price
									</th>
									<th
										scope="col"
										class="table"
									>
										Qty
									</th>
									<th
										scope="col"
										class="table"
									>
										Total Price
									</th>
									<th scope="col" class="px-3 py-3" />
								</tr>
							</thead>
							<!-- Table body -->
							<div class="">
								<tbody>
									<tr
										v-for="(item, index) in items"
										:key="index"
										class="grid grid-cols-11 gap-4 pt-2"
									>
										<!-- Item input -->
										<td class="col-span-4 mb-2 md:mb-0">
											<input
												v-model="item.name"
												type="text"
												placeholder="Company Name"
												class="input"
											>
										</td>
										<!-- Price input -->
										<td class="mb-2 col-span-2 md:mb-0">
											<input
												v-model="item.price"
												type="text"
												placeholder="$500"
												class="input"
											>
										</td>
										<!-- Qty input -->
										<td class="mb-2 col-span-2 md:mb-0">
											<input
												v-model="item.qty"
												type="text"
												placeholder="1"
												class="input"
											>
										</td>
										<!-- Total Price input -->
										<td class="mb-2 col-span-2 md:mb-0">
											<input
												type="text"
												:value="item.qty * item.price"
												readonly
												class="input"
											>
										</td>
										<!-- Delete icon -->
										<td class="relative">
											<div
												class="px-4 py-2 text-gray-800 cursor-pointer"
												@click="deleteItem(index), (showDeleteDropdown[index] = false)"
											>
												<div class="">
													<delete-icon />
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</div>
						</table>
					</div>

					<div class="grid grid-cols-3 whitespace-nowrap gap-10 lg:gap-4 pt-2">
						<div @click="addItem">
							<span
								class="flex items-center text-xl mb-2 text-left text-blue-500 cursor-pointer font-bold"
							>
								<plus /> Add Item</span>
						</div>
						<div>
							<span class="block mb-2 text-xl text-left font-bold text-black">Total Amount</span>
						</div>
						<div>
							<span class="block mb-2 text-xl text-left font-bold text-black">&#x20A6;{{ totalAmount.toFixed(2) }}</span>
						</div>
					</div>

					<h1 class="text-left font-bold pb-2 pt-5 text-xl">
						Notes
					</h1>
					<div class="grid grid-cols-1 gap-4">
						<div>
							<textarea placeholder="Write your notes here..." rows="4" class="input" />
						</div>
					</div>

					<div class="flex justify-center lg:justify-end m-4 pb-10">
						<button
							class="text-white bg-primary py-2 px-8 rounded-lg border border-gray-200 text-lg font-medium"
						>
							Create Invoice
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Plus from './svgs/plus.vue'
import ChainIcon from './svgs/chain-icon.vue'
import DeleteIcon from './svgs/delete-icon.vue'

const emit = defineEmits(['close'])
const text = 'Create New Invoice' // Replace with your text
const showModal = ref(true)
const showDeleteDropdown = ref([])
const formData = {
  billFrom: ref(''),
  billTo: ref(''),
  email: ref(''),
  title: ref(''),
  dueOn: ref(''),
  issuedOn: ref(''),
  projectName: ref('')
}

function deleteItem(index) {
  items.value.splice(index, 1)
}
const items = ref([
  { name: '', price: '', qty: '' } // Initial item
])

function addItem() {
  items.value.push({ name: '', price: '', qty: '' })
}

function handleModalClose() {
  emit('close')
  showModal.value = false
  items.value = [
    { name: '', price: '', qty: '' } // Reset the items when the modal is closed
  ]
}

const totalAmount = computed(() => {
  return items.value.reduce((total, item) => {
    const price = parseFloat(item.price)
    const qty = parseInt(item.qty)
    return total + (isNaN(price) || isNaN(qty) ? 0 : price * qty)
  }, 0)
})

// function createInvoice() {
// 	const payload: {
// 		billFrom: billFrom.value
// 	}
// }
</script>

<style scoped>
.input {
  @apply w-full text-gray-500 px-4 py-2 text-xl bg-blue-50 bg-opacity-50  rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-300 transition;
}

.table{
	@apply block mb-2 text-left col-span-2 font-bold whitespace-nowrap
}
.container {
  height: 450px; /* Set the maximum height of the container div */
  overflow-y: scroll; /* Enable vertical scrolling within the container div */
}

.content {
  height: 100%; /* Set the height of the content div to fill the container div */
}
</style>
