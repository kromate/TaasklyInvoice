import { useStorage } from '@vueuse/core'
import { useCreateInvoice } from './create'
import googleFonts from './fonts'
import { insertGoogleFont } from '@/composables/utils'

const { formCustomisationData } = useCreateInvoice()

const step = useStorage('step', 1)
const fonts = ref(googleFonts)

export const useFormUsage = () => {
    const moveToStep = (stepValue: number) => {
        step.value = stepValue
    }
    return { step, moveToStep }
}

export const useGoogleFont = () => {
    const loadingFontLink = ref(false)

    watch(formCustomisationData.font_family, (val) => {
        loadingFontLink.value = true
        const url = `https://fonts.googleapis.com/css2?family=${val}:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap`
        insertGoogleFont(url, () => {
            loadingFontLink.value = false
        })
        loadingFontLink.value = false
    }, { immediate: true })

    return { fonts, loadingFontLink }
}
