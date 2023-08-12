<template>
	<div ref="canvasRef">
		<canvas />
	</div>
</template>

<script setup lang="ts">
import { experimentalCanvas } from '@/composables/invoice'

const canvasRef = ref(null) as any

onMounted(() => {
  const canvas = canvasRef.value
    if (canvas) {
    console.log(experimentalCanvas.value)
    canvas.innerHtml = experimentalCanvas.value
    // Now you can use ctx to draw on the canvas
  }
})
</script>

<style scoped>

</style>
