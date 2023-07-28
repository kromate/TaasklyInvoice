<template>
	<div class="bg-[#F3EFFE] py-10 faq-container">
		<!-- ... existing code ... -->
		<h1 class="text-[2.2rem] md:text-[3rem] lg:text-[3.2rem] leading-[140%] font-[500] text-[#0F172A] text-center my-5">
			Frequently Asked Questions
		</h1>
		<div class="mt-10 py-10 max-w-2xl mx-auto">
			<div
				v-for="(faq, index) in faqs"
				:key="index"
				class="tab rounded-2xl bg-white p-6 w-full overflow-auto cursor-pointer shadow-[0px_8px_16px_rgba(17,_17,_17,_0.06)] my-5 transition-all duration-[5050ms] delay-500 ease-out"
			>
				<div
					class="collapse-arrow cursor-pointer"
					:class="{ 'collapsed': activeTab !== index }"
					@click="toggleAccordion(index)"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="30"
						width="30"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="collapse-arrow"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
				<label :for="`tab-single-${index}`" class=" text-black block text-xl cursor-pointer">
					{{ faq.question }}
				</label>
				<div v-if="activeTab === index" class="tab-content overflow-hidden leading-normal">
					<h4 class="text-base my-5">
						<div v-html="faq.answer" />
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(null)

function toggleAccordion(index) {
  activeTab.value = activeTab.value === index ? null : index
}

const faqs = [
  {
    question: 'Is the Kippa Invoice Generator Free?',
    answer: '<h4 class=\'text-base my-5\'>Is the Kippa Invoice Generator Free?</h4>'
  },
  {
    question: 'Is the Kippa Invoice Generator Free?',
    answer: '<h4 class=\'text-base my-5\'>Is the Kippa Invoice Generator Free?</h4>'
  },
  {
    question: 'Is the Kippa Invoice Generator Free?',
    answer: '<h4 class=\'text-base my-5\'>Is the Kippa Invoice Generator Free?</h4>'
  },
  {
    question: 'Is the Kippa Invoice Generator Free?',
    answer: '<h4 class=\'text-base my-5\'>Is the Kippa Invoice Generator Free?</h4>'
  },
  {
    question: 'Is the Kippa Invoice Generator Free?',
    answer: '<h4 class=\'text-base my-5\'>Is the Kippa Invoice Generator Free?</h4>'
  },
  {
    question: 'Is the Kippa Invoice Generator Free?',
    answer: '<h4 class=\'text-base my-5\'>Is the Kippa Invoice Generator Free?</h4>'
  }
]
</script>

<style lang="scss" scoped>
.collapse-arrow {
  float: right;
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
}

.collapsed .collapse-arrow {
  transform: rotate(-180deg);
}
</style>
