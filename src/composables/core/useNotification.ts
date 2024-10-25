const alertState = {
	active: ref(false),
	message: ref(''),
	type: ref('Alert')
}

const ALERT_DURATION = 5000

const loadingState = {
  active: ref(false),
  message: ref('')
}

interface AlertTypes {
	type: 'Alert' | 'ERROR' | 'SUCCESS'
	msg: string
}

export const useAlert = () => {
	const openAlert = ({ type, msg }: AlertTypes) => {
		alertState.type.value = type
		alertState.message.value = msg
		alertState.active.value = true
		setTimeout(closeAlert, ALERT_DURATION)
	}
	const closeAlert = () => {
		alertState.message.value = ''
		alertState.active.value = false
	}

	return { ...alertState, openAlert, closeAlert, ALERT_DURATION }
}

export const useLoading = () => {
  const openLoading = (msg: string) => {
    loadingState.message.value = msg
    loadingState.active.value = true
  }
  const closeLoading = () => {
    loadingState.message.value = ''
    loadingState.active.value = false
  }
  return { ...loadingState, openLoading, closeLoading }
}
