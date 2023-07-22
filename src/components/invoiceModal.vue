<template>
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
	>
		<div
			class="container bg-white w-full md:w-1/3 px-2 pt-10 lg:px-12 min-h-screen rounded-lg text-center"
		>
			<div class="content">
				<div class="flex mt-2 justify-between">
					<p class="text-2xl font-bold">
						{{ text }}
					</p>
					<span class="cursor-pointer" @click="handleModalClose">❌</span>
				</div>

				<div class="pt-5">
					<div class="flex justify-between">
						<div>
							<h2 class="lg:text-xl font-bold mb-4">
								Invoice Details <span class="text-primary font-bold">#NRjhkfjsfsfs</span>
							</h2>
						</div>

						<span class="text-gray-600 cursor-pointer">Copy link</span>
					</div>

					<h1 class="text-left font-bold pb-2 pt-5 text-xl">
						Details
					</h1>
					<div class="grid lg:grid-cols-2 gap-4">
						<div>
							<label class="block mb-2 text-left font-bold">Bill From</label>
							<input
								v-model="billFrom"
								type="text"
								class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-white transition"
							>
						</div>
						<div>
							<label class="block mb-2 text-left font-bold">Bill To</label>
							<input
								v-model="billTo"
								type="text"
								class="w-full text-gray-500 px-4 py-2 text-xl bg-blue-50 border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-white transition"
							>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-4 pt-2">
						<div>
							<label class="block mb-2 text-left font-bold">Recipient Email</label>
							<input
								v-model="email"
								type="text"
								class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-white transition"
							>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-4 pt-2">
						<div>
							<label class="block mb-2 text-left font-bold">Bill Title/Project Descriptions</label>
							<input
								v-model="title"
								type="text"
								class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-white transition"
							>
						</div>
					</div>

					<div class="grid lg:grid-cols-2 gap-4 pt-2">
						<div>
							<label class="block mb-2 text-left font-bold">Issued On</label>
							<input
								v-model="issuedOn"
								type="date"
								class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-white transition"
							>
						</div>
						<div>
							<label class="block mb-2 text-left font-bold">Due On</label>
							<input
								v-model="dueOn"
								type="date"
								class="w-full text-gray-500 px-4 py-2 text-xl bg-blue-50 border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-white transition"
							>
						</div>

						<label class="flex items-center space-x-2">
							<input
								v-model="isChecked"
								type="checkbox"
								class="form-checkbox h-5 w-5 text-[#01CC88] cursor-pointer"
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
								class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition"
							>
						</div>
					</div>

					<div>
						<table class="w-full text-left text-gray mt-2">
							<!-- Table headers -->
							<thead class="">
								<tr class="grid grid-cols-6">
									<th scope="col" class="block col-span-2 mb-2 text-left font-bold">
										Item
									</th>
									<th scope="col" class="block mb-2 text-left font-bold">
										Price
									</th>
									<th
										scope="col"
										class="block mb-2 text-left font-bold whitespace-nowrap"
									>
										Qty
									</th>
									<th
										scope="col"
										class="block mb-2 text-left font-bold whitespace-nowrap"
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
										class="grid grid-cols-6 gap-4 pt-2"
									>
										<!-- Item input -->
										<td class="col-span-2 mb-2 md:mb-0">
											<input
												v-model="item.name"
												type="text"
												placeholder="Company Name"
												class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition"
											>
										</td>
										<!-- Price input -->
										<td class="mb-2 md:mb-0">
											<input
												v-model="item.price"
												type="text"
												placeholder="$500"
												class="w-full text-gray-500 px-4 py-2 text-xl bg-blue-50 border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition"
											>
										</td>
										<!-- Qty input -->
										<td class="mb-2 md:mb-0">
											<input
												v-model="item.qty"
												type="text"
												placeholder="1"
												class="w-full text-gray-500 px-4 py-2 text-xl bg-blue-50 border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition"
											>
										</td>
										<!-- Total Price input -->
										<td class="mb-2 md:mb-0">
											<input
												type="text"
												:value="item.qty * item.price"
												readonly
												class="w-full text-gray-500 px-4 py-2 text-xl bg-blue-50 border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition"
											>
										</td>
										<!-- Delete icon -->
										<td class="relative">
											<div>
												<span
													class="flex items-center justify-center"
													@click="showDeleteDropdown[index] = !showDeleteDropdown[index]"
												>
													<svg
														class="h-5 w-5 text-black transform cursor-pointer -rotate-90"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M10 12a2 2 0 100-4 2 2 0 000 4zM10 4a2 2 0 100-4 2 2 0 000 4zM10 20a2 2 0 100-4 2 2 0 000 4z"
														/>
													</svg>
												</span>
												<span
													v-if="showDeleteDropdown[index]"
													class="absolute mt-2 bg-white border rounded-lg shadow-md"
												>
													<ul>
														<li
															class="px-4 py-2 text-gray-800   cursor-pointer"
															@click="
																deleteItem(index), (showDeleteDropdown[index] = false)
															"
														>
															<div class="flex items-center gap-2">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width="16"
																	height="16"
																	fill="red"
																	class="bi bi-trash"
																	viewBox="0 0 16 16"
																>
																	<path
																		d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
																	/>
																	<path
																		fill-rule="evenodd"
																		d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
																	/>
																</svg>
																Delete
															</div>
														</li>
													</ul>
												</span>
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
								class="block text-xl mb-2 text-left text-blue-500 cursor-pointer font-bold"
							>+ Add Item</span>
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
							<textarea
								placeholder="Write your notes here..."
								rows="4"
								class="w-full text-gray-500 px-4 py-2 bg-blue-50 text-xl border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition"
							/>
						</div>
					</div>

					<div class="flex  justify-center lg:justify-end m-4 pb-10">
						<!-- <v-button
							size="small"
							:loading="loading"
							class="py-4 text-xl "
							type="sec"
						>
							Create Invoice
						</v-button> -->

						<button type="pry" class="text-white bg-primary py-4 px-4  rounded border border-gray-200 text-sm font-medium " @click="openModal">
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
import VButton from './v-button.vue'

const emit = defineEmits(['close'])
const text = 'Create New Invoice' // Replace with your text
const showModal = ref(true)
const showDeleteDropdown = ref([])
const billFrom = ref('')
const billTo = ref('')
const email = ref('')
const title = ref('')
const dueOn = ref('')
const issuedOn = ref('')
const projectName = ref('')

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
.container {
  height: 450px; /* Set the maximum height of the container div */
  overflow-y: scroll; /* Enable vertical scrolling within the container div */
}

.content {
  height: 100%; /* Set the height of the content div to fill the container div */
}
</style>
