<template>
	<section id="outputContainer" class="md:flex flex-col sub_section text-dark output relative" :class="[hideOnSmallScreens? 'hidden': '']">
		<template_1 />
		<InvoiceExtrasAttribution />
	</section>
</template>

<script setup lang="ts">
import template_1 from './template_1/index.vue'

defineProps({
	hideOnSmallScreens: {
		type: Boolean,
		required: false,
		default: true
	}
})
</script>

<style scoped>

</style>
