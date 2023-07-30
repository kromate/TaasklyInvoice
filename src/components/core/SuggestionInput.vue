<template>
	<div ref="target" class="relative w-full ">
		<input
			v-bind="{
				...$attrs,
			}"
			type="text"
			class="input-field"
			:placeholder="loading ? 'Loading..' : placeholder"
			:disabled="loading || disabled"
			:value="typedText"

			@input="handleInput"
			@focus="showSuggestions"
		>

		<ul
			v-if="showingSuggestions"
			class="absolute max-h-48 overflow-y-auto z-50 w-full mt-1 bg-white border border-dark rounded-md shadow-lg"
		>
			<div v-if="filteredItems.length > 0">
				<li
					v-for="item in (filteredItems as any)"
					:key="item.id"
					class="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
					@click="selectItem(item)"
				>
					{{ item.name || item }}
				</li>
			</div>
			<div v-else>
				<li class="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
					No results found
				</li>
			</div>
		</ul>
	</div>
</template>

<script setup lang='ts'>
import { onClickOutside } from '@vueuse/core'
const target = ref(null)

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
	placeholder: { type: String, default: 'placeholder text ' },
	loading: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])
const typedText = ref('')
const showingSuggestions = ref(false)
const selectedItem = ref({} as any)

const onBlur = () => {
    if (!selectedItem?.value?.name) {
        typedText.value = ''
	} else {
		typedText.value = selectedItem.value.name
	}
	showingSuggestions.value = false
}

onClickOutside(target, onBlur)
onMounted(() => {
	   typedText.value = props?.modelValue
    selectedItem.value = props.modelValue
})

const filteredItems = computed(() => {
    return props.options.filter((item: any) =>
        item.toLowerCase().includes(typedText.value.toLowerCase())
    )
}
)

const handleInput = (event:any) => {
  typedText.value = event.target.value
  showingSuggestions.value = true
}

const showSuggestions = () => {
  if (filteredItems.value.length > 0) {
    showingSuggestions.value = true
  }
}

const selectItem = (item:any) => {
	typedText.value = item
	selectedItem.value = item
    emit('update:modelValue', item)
  showingSuggestions.value = false
}

</script>
