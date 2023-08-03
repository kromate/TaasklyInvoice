<template>
	<section class="flex flex-col sub_section">
		<header class="flex justify-between">
			<Stepper />
			<nuxt-link to="/preview" class="btn-primary md:hidden">
				Preview
			</nuxt-link>
		</header>

		<section class="mt-12 relative">
			<transition name="slideRight" appear>
				<InvoiceSetupSectionOne v-if="step ===1" />
				<InvoiceSetupSectionTwo v-else-if="step ===2" />
				<InvoiceSetupSectionThree v-else-if="step ===3" />
				<InvoiceSetupSectionFour v-else-if="step ===4" />
			</transition>
		</section>
	</section>
</template>

<script setup lang="ts">
import { useFormUsage } from '@/composables/invoice/usage'

const { step } = useFormUsage()
</script>

<style scoped>

.slideRight-enter-from {
	opacity: 1;
	transform: translateX(50px);
	z-index: -10;
animation-delay: 1s;
}
.slideRight-leave-to {
	opacity: 0;
	position: absolute;
	width: 100%;
	z-index: 0;
	transform: translateX(-50px);
}

.slideRight-enter-active,
.slideRight-leave-active {
	transition: all 0.2s linear;
}
</style>
