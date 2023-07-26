import { getFirestoreSubCollection } from '@/firebase/firestore'
import { useAlert } from '@/composables/core/useNotification'
import { useUser } from '@/composables/auth/user'

const { username } = useUser()

const referrals = ref([])

export const useReferrals = () => {
	const loading = ref(false)

	const fetchReferral = async () => {
		if (referrals.value.length > 0) return
        loading.value = true
        try {
			await getFirestoreSubCollection('usernames', username.value as string, 'referrals', referrals)
			loading.value = false
		} catch (e: any) {
			loading.value = false
			useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
		}
	}

	return { loading, fetchReferral, referrals }
}
