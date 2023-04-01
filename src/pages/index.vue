
<template>
	<main class="flex center justify-center items-center bg h-screen px-4">
		<form id="form" ref="form" class=" bg-white p-8 gap-6 flex flex-col rounded-2xl max-w-full w-[500px]" @submit.prevent="generate">
			<h1 class="text-[#0B101F] text-center md:text-[32px] text-2xl font-bold">
				Generate your certificate
			</h1>

			<div class="field relative">
				<label for="second_name">Email</label>
				<input
					id="email"
					v-model="name"
					type="email"
					placeholder="Enter the email you used to register"
					name="email"
					class="input-field"
					required
				>
			</div>
			<button class="bg-[#283ba4] text-white px-4 py-2 rounded-md" :disabled="name.length === 0">
				Generate certificate
			</button>
		</form>
	</main>
</template>

<script setup lang="ts">

import registrant from '@/helper/people'
import leads from '@/helper/leads'
import { setUser } from '@/composable/base'

const name = ref('')

const generate = () => {
  const isRegistered = registrant.filter((person:any) => {
    if (typeof person.email === 'string' && person.email.toLowerCase() === name.value.toLowerCase()) {
      return true
    } else {
      return false
    }
  })
	if (isRegistered.length === 0) {
	alert('You didn\'t register for this bootcamp')
	return
	}
  const user = isRegistered[0] as any

  const usersLead = leads.filter((lead:any) => {
	  if (lead.university === user.university) {
		user.lead = lead.lead
	  return true
	} else {
	  return false
	}
  })

	setUser(user)
	useRouter().push('/certificate')
}

definePageMeta({
	layout: 'default'
})
</script>

<style scoped>

</style>
