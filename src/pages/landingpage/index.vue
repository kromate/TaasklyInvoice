<template>
	<div class="bg-white">
		<NavBar />
		<Hero />
		<Stepper />
		<TemplateVue />
		<FaqAccordion />
		<Business />
		<Footer />
	</div>
</template>

<script setup>
import Footer from '../../components/landingpage/Footer.vue'
import Business from '../../components/landingpage/Business.vue'
import FaqAccordion from '../../components/landingpage/FaqAccordion.vue'
import Stepper from '../../components/landingpage/Stepper.vue'
import Hero from '../../components/landingpage/Hero.vue'
import NavBar from '../../components/landingpage/navBar.vue'
import TemplateVue from '~~/src/components/landingpage/Template.vue'

</script>

<style scoped>

</style>
