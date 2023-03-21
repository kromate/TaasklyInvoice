
<template>
	<main class="grid grid-cols-2">
		<section>
			<form id="form" ref="form" class="w-full bg-white p-8 gap-6 flex flex-col rounded-2xl">
				<h1 class="text-[#0B101F] text-center text-[32px] font-bold">
					Generate cert
				</h1>
				<div class="field relative">
					<label for="size_of_employee">Select School</label>
					<select id="schools-select" v-model="selectedSchool" class="input-field" required>
						<option v-for="school in schools" :key="school.name" :value="school">
							{{ school.school }}
						</option>
					</select>
				</div>
				<div class="field relative">
					<label for="size_of_employee">Select Track</label>
					<select id="schools-select" v-model="selectedTrack" class="input-field" required>
						<option v-for="track in tracks" :key="track" :value="track">
							{{ track }}
						</option>
					</select>
				</div>
				<div class="field relative">
					<label for="second_name">Name</label>
					<input
						id="name"
						v-model="name"
						type="text"
						placeholder="Full name"
						name="Name"
						class="input-field"
						required
					>
				</div>
			</form>
		</section>
		<section class="flex flex-col gap-6 justify-center items-center md:p-12 py-12 px-4 relative">
			<div ref="pdfSection" class="holder w-auto max-w-[100vw]  border relative bg-white">
				<Certificate :name="name" :lead="selectedSchool.name" :university="selectedSchool.school" :track="selectedTrack" />
			</div>
			<button class="bg-[#283ba4] text-white px-4 py-2 " @click="capture">
				Generate certificate
			</button>
		</section>
	</main>
</template>

<script setup lang="ts">

import html2canvas from 'html2canvas'
const pdfSection = ref<HTMLElement | any>(null)
const schools = [
	{ name: 'Akpan Anthony', school: 'University of Lagos' },
	{ name: 'Kolawole Oluwagbemileke', school: 'Babcock University' },
	{ name: 'Moshood Kausar', school: 'OOU' }
]
const tracks = ['Flutter', 'Data Science', 'UI/UX', 'Cyber Security', 'DevOps', 'React']
const selectedSchool = ref({} as any)
const selectedTrack = ref('')
const name = ref('')
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
	layout: 'default'
})
</script>

<style scoped>

</style>
