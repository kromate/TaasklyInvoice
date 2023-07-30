<template>
	<div id="loading" :style="{ width: size, height: size}" />
</template>

<script lang="ts" setup>
defineProps({
	size: {
		type: String,
		default: '28px',
		required: false

	}
})
</script>

<style>
[theme="light"] {
	--darkx: 0, 0, 0;
}
[theme="dark"] {
	--darkx: 255, 255, 255;
}
</style>

<style scoped>

#loading {
	display: block;
	border: 3px solid rgba(var(--darkx), 0.634);
	border-radius: 50%;
	border-top-color: var(--darkx);
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
	to {
		-webkit-transform: rotate(360deg);
	}
}
@-webkit-keyframes spin {
	to {
		-webkit-transform: rotate(360deg);
	}
}
</style>
