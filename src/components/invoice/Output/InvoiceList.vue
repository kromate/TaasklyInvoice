<template>
	<table class="table-auto w-full mt-12">
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
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
