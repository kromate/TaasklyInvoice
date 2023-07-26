<template>
	<div class="p-4 w-1/2 my-0 mx-auto flex flex-col gap-5 h-screen">
		<div class="border-b border-gray-300 py-4">
			<h1 class="text-xl font-bold mb-3">
				Invioce <span class="text-blue-700">#NR 0001/08/2023</span>
			</h1>
			<p class="text-lg">
				Norch Studio
			</p>
		</div>
		<div class="flex flex-col gap-5">
			<div class="flex gap-10">
				<div class="w-1/2">
					<p class="text-sm font-bold">
						Bill From:
					</p>
					<p class="text-xl">
						Reza Raharjo
					</p>
					<p class="text-sm">
						4517 Washington Ave. Manchester, Kentucky 39495
					</p>
				</div>
				<div class="w-1/2">
					<p class="text-sm font-bold">
						Bill To:
					</p>
					<p class="text-xl">
						Ghyah Gundono
					</p>
					<p class="text-sm">
						1901 Thomridge Cir. Shiloh, Hawaii 81063
					</p>
				</div>
			</div>
			<div class="flex gap-10">
				<div class="w-1/2">
					<p class="text-sm font-bold">
						Issued On:
					</p>
					<p class="text-xl">
						11 March, 2023
					</p>
				</div>
				<div class="w-1/2">
					<p class="text-sm font-bold">
						Due On:
					</p>
					<p class="text-xl">
						16 March, 2023
					</p>
				</div>
			</div>
		</div>

		<!-- table data -->
		<div>
			<table class="table-auto w-full">
				<caption class="caption-top text-left text-sm text-gray-500 font-bold">
					Invoice Detail
				</caption>
				<thead>
					<tr
						class="border-separate border-spacing-2 border-b border-t border-gray-300"
					>
						<th class="text-left py-2 text-gray-500 font-medium">
							Description
						</th>
						<th class="text-left text-gray-500 font-medium">
							Price
						</th>
						<th class="text-left text-gray-500 font-medium">
							Qty
						</th>
						<th class="text-right text-gray-500 font-medium">
							Total Amount
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="pt-2">
							Insurance Landing Page
						</td>
						<td>$1.000</td>
						<td>2</td>
						<td class="text-right">
							$1.000
						</td>
					</tr>
					<tr>
						<td class="py-2">
							Insurance illustration
						</td>
						<td>$500</td>
						<td>1</td>
						<td class="text-right">
							$500
						</td>
					</tr>
					<tr
						class="border-separate border-spacing-2 border-b border-t border-gray-300"
					>
						<td class="py-2 font-bold">
							Grand Total
						</td>
						<td class="font-bold text-right" colspan="3">
							$1500
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="py-2 px-5 rounded-md bg-orange-100 border-orange-300 border-2">
			<span />
			<p class="text-sm bg-orange-100">
				Client will get notify to make payment with any credit card or bank
				tranfer.
			</p>
		</div>

		<!-- BTN -->
		<div class="flex justify-between items-center mt-auto pb-5">
			<button class="border py-1 px-5 rounded-md text-gray-500 font-semibold">
				Cancel
			</button>
			<div class="flex gap-5">
				<button class="border py-1 px-5 rounded-md text-gray-500 font-semibold">
					Save as Draft
				</button>
				<button
					class="border py-1 px-5 rounded-md text-white bg-blue-700 font-semibold"
				>
					Send
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
