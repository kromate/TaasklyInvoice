<template>
	<article class="grid grid-cols-2 mt-4 gap-4">
		<div class="flex flex-col gap-1">
			<p class="text-sm font-medium">
				Bill From:
			</p>
			<p class="text-lg font-semibold">
				{{ formInfoData.from.name.value }}
			</p>
			<p class="text-sm">
				{{ formInfoData.from.address.value }}
			</p>
		</div>
		<div class="flex flex-col gap-1">
			<p class="text-sm font-medium">
				Bill To:
			</p>
			<p class="text-lg font-semibold">
				{{ formInfoData.to.name.value }}
			</p>
			<p class="text-sm">
				{{ formInfoData.to.address.value }}
			</p>
		</div>
		<div class="flex flex-col gap-1">
			<p class="text-sm font-semibold">
				Issued On:
			</p>
			<p class="text-lg">
				{{ formInfoData.dates.issued.value }}
			</p>
		</div>
		<div class="flex flex-col gap-1">
			<p class="text-sm font-semibold">
				Due On:
			</p>
			<p class="text-lg">
				{{ formInfoData.dates.due.value }}
			</p>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCreateInvoice } from '@/composables/invoice/create'
const { formInfoData } = useCreateInvoice()
</script>

<style scoped>

</style>
