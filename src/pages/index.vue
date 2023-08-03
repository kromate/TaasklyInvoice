<template>
	<div class="relative isolate overflow-hidden bg-light">
		<svg class="absolute inset-0 -z-10 h-full w-full stroke-dark [mask-image:radial-gradient(100%_100%_at_top_right,var(--light),transparent)]" aria-hidden="true">
			<defs>
				<pattern
					id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M.5 200V.5H200" fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
		</svg>
		<div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
				<img class="w-40" src="@/assets/images/logo_text.svg" alt="Taaskly Logo">

				<h1 class="mt-10 text-3xl font-bold tracking-tight text-dark sm:text-6xl">
					Create professional and customized invoices in seconds
				</h1>
				<p class="mt-6 text-lg leading-8 text-grey_two">
					Say goodbye to the hassle of manual invoicing and hello to streamlined efficiency. Whether you're a freelancer, small business owner, or independent contractor,
					<a href="https://taaskly.xyz" target="_blank" rel="noopener noreferrer" class="underline text-secondary">Taaskly</a> Invoice has got you covered.
				</p>
				<div class="flex flex-col gap-3 text-secondary text-lg mt-4">
					<span v-for="item in benefits" :key="item.name" class="flex items-center gap-3">
						<CheckCircleIcon class="text-dark w-6" />
						<span v-html="item.name" />
					</span>
				</div>
				<div class="mt-10 flex items-center gap-x-6">
					<nuxt-link class="btn-secondary" to="/invoice">
						Get started
					</nuxt-link>
					<a href="https://github.com/Taaskly/Taaskly-invoicer" target="_blank" class="text-sm font-semibold leading-6 text-dark">Star on Github <span aria-hidden="true">→</span></a>
				</div>
			</div>
			<div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
				<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
					<div class="-m-2 rounded-xl bg-grey_four p-2 ring-1 ring-inset ring-dark lg:-m-4 lg:rounded-2xl lg:p-4">
						<img src="@/assets/images/cta.svg" alt="App screenshot" width="2432" height="1442" class="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const benefits = ref([
	{
		name: 'Open Source',
		description: 'Taaskly Invoice is open source and free to use. You can contribute to the project on Github.',
		icon: CheckCircleIcon
	},
	{
		name: 'Easy to use',
		description: 'Taaskly Invoice is easy to use and can be used by anyone. No coding skills required.',
		icon: CheckCircleIcon
	},
	{
		name: 'Customizable',
		description: 'Taaskly Invoice is customizable. You can change the colors, logo, and more.',
		icon: CheckCircleIcon
	},
	{
		name: 'Multiple template <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">Coming Soon</span>',
		description: 'Taaskly Invoice has multiple templates to choose from. You can choose the one that suits you best.',
		icon: CheckCircleIcon
	}
])
</script>
