<template>
	<section class="flex flex-col sub_section">
		<Stepper />
		<section class="mt-12">
			<transition name="slideRight" appear>
				<InvoiceSetupSectionOne v-if="step ===1" />
			</transition>
		</section>
	</section>
</template>

<script setup lang="ts">
import { useFormUsage } from '@/composables/invoice/usage'

const { step } = useFormUsage()
</script>

<style scoped>
.slideRight-enter-from,.slideRight-leave-to {
	opacity: 0;
	transform: translateX(-500px);
}

.slideRight-enter-active,
.slideRight-leave-active {
	transition: all 0.35s ease-in;
}
</style>
