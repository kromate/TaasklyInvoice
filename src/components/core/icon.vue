<template>
	<svg viewBox="0 0 24 24">
		<use v-bind="{ 'xlink:href': `${iconSvg}#${name}` }" />
	</svg>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
import iconSvg from '@/assets/icons/sprite.svg'

export default {
	name: 'IconComp',
	props: {
		name: {
			required: true,
			type: String
		}
	},
	data() {
		return {
			iconSvg
		}
	}
}
</script>
