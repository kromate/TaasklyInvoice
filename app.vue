
<template>
	<div>
		<NuxtLayout> <NuxtPage /> </NuxtLayout>
	</div>
</template>

<script setup>
import { useThemeController } from '@/composables/core/system/theme'
import { useGoogleFont } from '@/composables/invoice/usage'
useThemeController()
useGoogleFont()
</script>
