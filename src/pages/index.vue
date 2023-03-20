
<template>
	<main class="flex flex-col gap-6 justify-center items-center md:p-12 py-12 px-4 relative">
		<div ref="pdfSection" class="holder w-[600px] max-w-[100vw] h-full border relative bg-white">
			<img id="cert" src="/certificate.jpeg" alt="certificate" class="">
			<div ref="el" class="fixed  top-0 py-4 px-2 flex" :style="style">
				<span ref="handle" class="mr-1 cursor-move">👋🏾 </span>	<div contentEditable="true" class="outline-none">
					Anthony akpan
				</div>
			</div>
		</div>
		<button class="bg-[#283ba4] text-white px-4 py-2 " @click="capture">
			Generate certificate
		</button>
	</main>
</template>

<script setup lang="ts">
import { useDraggable, useStorage } from '@vueuse/core'
import html2canvas from 'html2canvas'
const el = ref<HTMLElement | null>(null)
const handle = ref<HTMLElement | null>(null)
const pdfSection = ref<HTMLElement | any>(null)
const innerWidth = window.innerWidth
const x_coordinate = useStorage('x_coordinate', innerWidth / 4.2)
const y_coordinate = useStorage('y_coordinate', 0)
const { x, y, style } = useDraggable(el, {
    initialValue: { x: x_coordinate, y: y_coordinate }
})

const capture = async () => {
	const canvas = await html2canvas(pdfSection.value)
	DownloadCanvasAsImage(canvas, 'certificate')
}

const DownloadCanvasAsImage = (canvas:HTMLCanvasElement, name:string) => {
    const downloadLink = document.createElement('a')
    downloadLink.setAttribute('download', `${name}.png`)
    const dataURL = canvas.toDataURL('image/png')
    const url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream')
    downloadLink.setAttribute('href', url)
    downloadLink.click()
}

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
