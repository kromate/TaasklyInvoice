
<template>
	<div theme="dark">
		<NuxtLayout> <NuxtPage /> </NuxtLayout>
	</div>
</template>

<script setup>
import { useThemeController } from '@/composables/core/system/theme'
useThemeController()
</script>
