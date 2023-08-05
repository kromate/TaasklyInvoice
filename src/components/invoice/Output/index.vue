<template>
	<section id="outputContainer" class="md:flex flex-col sub_section text-dark output" :class="[hideOnSmallScreens? 'hidden': '']">
		<template_1 />
		<!-- <Skeleton radius="4px" /> -->
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
