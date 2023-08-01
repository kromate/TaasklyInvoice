<template>
	<date-picker
		:value="dateInput"
		:format="format"
		:type="type"
		:placeholder="placeholder"
		:range="range"
		:disabled-date="disabledDate"
		class="w-full"
		:value-type="valueType"
		:disabled="disabled"
		:editable="editable"
		:clearable="clearable"
		:time-picker-options="timePickerOptions"
		:show-time-panel="showTimePanel"
		@update:value="handleDate"
	>
		<template #header="{ emit }">
			<button class="mx-btn mx-btn-text" @click="emit(new Date())">
				Today
			</button>
		</template>
	</date-picker>
</template>

<script setup lang="ts">
import DatePicker from 'vue-datepicker-next'
import './themes/styles.css'
import props from './props'

const emit = defineEmits(['update:modelValue'])

const propsValue = defineProps({
  ...props
})
const dateInput = ref(propsValue.modelValue)

const handleDate = (date: any) => {
	dateInput.value = date
	emit('update:modelValue', date)
}

</script>

<style scoped>
.date-picker {
  background-color: blue;
}
</style>
