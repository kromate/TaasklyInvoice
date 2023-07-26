<template>
	<nav class=" border-gray-200 px-2 sm:px-4 py-4  rounded">
		<div class="container md:container lg:container flex flex-wrap justify-between items-center mx-auto px-3 md:px-0">
			<a href="" aria-current="page" class="flex nuxt-link-exact-active nuxt-link-active">
				<img src="/favicon.svg" width="72" height="24" alt="">

			</a>
			<div class="flex md:order-2">
				<Nuxt-link target="_blank" to="" type="button" class="text-white hidden md:block text-base bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-7 py-3.5 text-center mr-3 md:mr-0">
					Get App
				</Nuxt-link> <button type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
					<span class="sr-only">Open main menu</span> <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
						<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
					</svg> <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hidden w-6 h-6">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
				</button>
			</div>
			<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
				<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
					<li class="relative py-1 px-1">
						<Nuxt-link to="" class="block py-2 px-4 text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:border-0 hover:text-primary md:p-0">
							Features
						</Nuxt-link>
					</li>
					<li class="relative nav-link text-sm font-medium text-black flex items-center pt-1 cursor-pointer pb-3" @click="toggleDropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
						Products

						<svg

							width="8"
							height="5"
							viewbox="0 0 8 5"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="fill-white ml-2"
						>
							<path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor" />
						</svg>
						<div v-if="dropdownVisible" ref="dropdown" class="nav-item bg-white p-2 gap-12.5 absolute top-full left-1/2 -translate-x-1/2 w-full max-w-5xl rounded-lg border-[#D8E0E9] border z-[999] min-w-[350px]">
							<div class="p-2 m-0 leading-6 bg-no-repeat cursor-pointer hover:bg-pink-100" style="border-radius: 11px; transition: background 0.4s ease 0s;">
								<div class="flex justify-between p-0 m-0 text-center text-neutral-800">
									<div class="p-0 m-0 bg-no-repeat w-3/12">
										<svg

											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect width="40" height="40" rx="12" fill="#E11D48" fill-opacity=".1" />
											<path opacity=".4" d="M24.191 10H15.81C12.77 10 11 11.78 11 14.83v10.33c0 3.1 1.77 4.84 4.81 4.84h8.381C27.28 30 29 28.26 29 25.16V14.83c0-3.05-1.72-4.83-4.809-4.83z" fill="#E11D48" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M16.08 14.65v.01a.78.78 0 000 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 00-.781-.78H16.08zm7.84 6.09h-7.84a.78.78 0 010-1.561h7.84a.781.781 0 010 1.561zm0 4.57h-7.84c-.3.04-.59-.11-.75-.36a.795.795 0 01.75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78z" fill="#E11D48" />
										</svg>
									</div>
									<div class="p-0 m-0 max-w-full bg-no-repeat w-9/12">
										<div class="block p-0 m-0 text-base not-italic font-bold leading-5 text-left text-slate-900">
											Invoices
										</div>
										<div class="block p-0 m-0 text-sm not-italic font-normal tracking-wide leading-5 text-left text-slate-700">
											Create professional invoices, save time and get paid
											easily.
										</div>
									</div>
								</div>
							</div>
							<div class="p-2 m-0 leading-6 bg-no-repeat cursor-pointer hover:bg-emerald-50 my-2" style="border-radius: 11px; transition: background 0.4s ease 0s;">
								<div class="flex justify-between p-0 m-0 text-center text-neutral-800">
									<div class="p-0 m-0 bg-no-repeat w-3/12">
										<svg

											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect width="40" height="40" rx="12" fill="#14B8A6" fill-opacity=".1" />
											<path opacity=".4" d="M24.676 10h-9.343C11.93 10 10 11.929 10 15.333v9.334C10 28.07 11.929 30 15.333 30h9.343C28.08 30 30 28.071 30 24.667v-9.334C30 11.93 28.08 10 24.676 10z" fill="#14B8A6" />
											<path d="M15.369 17.369a.833.833 0 00-.827.835v6.872a.83.83 0 001.662 0v-6.872a.835.835 0 00-.835-.835zM20.035 14.089a.833.833 0 00-.826.835v10.152a.83.83 0 001.662 0V14.924a.835.835 0 00-.836-.835zM24.64 20.996a.835.835 0 00-.836.835v3.245a.83.83 0 001.662 0V21.83a.833.833 0 00-.826-.835z" fill="#14B8A6" />
										</svg>
									</div>
									<div class="p-0 m-0 max-w-full bg-no-repeat w-9/12">
										<div class="block p-0 m-0 text-base not-italic font-bold leading-5 text-left text-slate-900">
											Bookkeeping
										</div>
										<div class="block p-0 m-0 text-sm not-italic font-normal tracking-wide leading-5 text-left text-slate-700">
											Track your sales, manage your expenses and keep an eye on
											your inventory.
										</div>
									</div>
								</div>
							</div>
							<div class="p-2 m-0 leading-6 bg-no-repeat cursor-pointer hover:bg-[rgba(242,239,254,.1)]" style="border-radius: 11px; transition: background 0.4s ease 0s;">
								<div class="flex justify-between p-0 m-0 text-center text-neutral-800">
									<div class="p-0 m-0 bg-no-repeat w-3/12">
										<svg

											width="40"
											height="41"
											viewBox="0 0 40 41"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect y=".5" width="40" height="40" rx="20" fill="#F3EFFE" />
											<g clip-path="url(#payment_svg__clip0_3514_16228)" stroke="#452E7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
												<path d="M27.5 13.833h-15c-.92 0-1.667.746-1.667 1.667v10c0 .92.746 1.667 1.667 1.667h15c.92 0 1.667-.747 1.667-1.667v-10c0-.92-.747-1.667-1.667-1.667zM10.833 18.833h18.334" />
											</g>
											<defs>
												<clipPath id="payment_svg__clip0_3514_16228">
													<path fill="#fff" transform="translate(10 10.5)" d="M0 0h20v20H0z" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<div class="p-0 m-0 max-w-full bg-no-repeat w-9/12">
										<div class="block p-0 m-0 text-base not-italic font-bold leading-5 text-left text-slate-900">
											Payment
										</div>
										<div class="block p-0 m-0 text-sm not-italic font-normal tracking-wide leading-5 text-left text-slate-700">
											Receive money from customers, pay relevant bills, move
											money around.
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="relative py-1 px-1">
						<Nuxt-Link to="" class="block py-2 px-4 text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:border-0 hover:text-primary md:p-0">
							Blog
						</Nuxt-Link>
					</li>
					<li class="relative py-1 px-1">
						<Nuxt-Link to="" class="block py-2 px-4 text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:border-0 hover:text-primary md:p-0">
							FAQS
						</Nuxt-Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue'

const dropdownVisible = ref(false)

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}
const showDropdown = () => {
  dropdownVisible.value = true
}

const hideDropdown = () => {
  dropdownVisible.value = false
}
</script>

<style lang="scss" scoped>

</style>
