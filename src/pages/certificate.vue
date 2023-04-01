<template>
	<section class="flex flex-col gap-6 justify-center items-center md:p-12 py-12 px-4 relative bg h-screen">
		<div ref="pdfSection" class="holder w-[750px] max-w-[98vw] relative bg-white">
			<Certificate :name="currentUser?.name" :lead="currentUser?.lead" :university="currentUser?.university" :track="currentUser?.track" />
		</div>
		<button class="bg-[#283ba4] text-white px-4 py-2 rounded-md" @click="capture">
			Generate certificate
		</button>
	</section>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'
import { currentUser } from '@/composable/base'

const pdfSection = ref<HTMLElement | any>(null)
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

definePageMeta({
    middleware: [() => {
        if (!currentUser.value) return useRouter().push('/')
    }]
})
</script>

<style scoped>

</style>
