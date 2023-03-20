
<template>
	<main ref="pdfSection" class="flex flex-col gap-6 justify-center items-center md:p-12 py-12 px-4 relative">
		<div class="holder w-[600px] max-w-[100vw] h-full border relative bg-white">
			<img id="cert" src="/certificate.jpeg" alt="certificate" class="">
			<div ref="el" class="fixed border-gray-500 border top-0 py-1 px-2 bg-white" :style="style">
				<span ref="handle" class="mr-1 cursor-move">👋🏾 </span>	Akpan Anthony
			</div>
		</div>
		<button class="bg-[#283ba4] text-white px-4 py-2 " @click="exportToPDF('my-pdf-file.pdf', pdfSection)">
			Generate certificate
		</button>
	</main>
</template>

<script setup lang="ts">
import { useDraggable, useStorage } from '@vueuse/core'
const el = ref<HTMLElement | null>(null)
const handle = ref<HTMLElement | null>(null)
const pdfSection = ref<HTMLElement | any>(null)
const innerWidth = window.innerWidth
const x_coordinate = useStorage('x_coordinate', innerWidth / 4.2)
const y_coordinate = useStorage('y_coordinate', 0)
const { x, y, style } = useDraggable(el, {
    initialValue: { x: x_coordinate, y: y_coordinate }
})

watch([x, y], (val) => {
	x_coordinate.value = val[0]
	y_coordinate.value = val[1]
})
definePageMeta({
	layout: 'default'
})
</script>

<style scoped>

</style>
