<template>
	<nav aria-label="Progress">
		<ol role="list" class="space-y-4 md:flex md:space-x-2 md:space-y-0 ">
			<li v-for="step in steps" :key="step.name" class="md:flex-1 ">
				<a v-if="step.status === 'complete'" :href="step.href" class="group flex flex-col border-l-4 border-secondary py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
					<span class="text-sm font-medium text-secondary group-hover:text-secondary">{{ step.id }}</span>
					<span class="text-sm font-medium text-white">{{ step.name }}</span>
				</a>
				<a v-else-if="step.status === 'current'" :href="step.href" class="flex flex-col border-l-4 border-secondary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
					<span class="text-sm font-medium text-secondary">{{ step.id }}</span>
					<span class="text-sm font-medium text-white">{{ step.name }}</span>
				</a>
				<a v-else :href="step.href" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
					<span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">{{ step.id }}</span>
					<span class="text-sm font-medium text-white">{{ step.name }}</span>
				</a>
			</li>
		</ol>
	</nav>
</template>

<script setup>
const steps = [
  { id: 'Step 1', name: 'Customisation', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Invoice Info', href: '#', status: 'upcoming' },
  { id: 'Step 3', name: 'Invoice List', href: '#', status: 'upcoming' }
]
</script>
