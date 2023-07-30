import { useStorage } from '@vueuse/core'
import axios from 'axios'
import { useCreateInvoice } from './create'
import { insertGoogleFont } from '@/composables/utils'

const { formCustomisationData } = useCreateInvoice()

const step = useStorage('step', 1)
const fonts = ref([])

export const useFormUsage = () => {
    const moveToStep = (stepValue: number) => {
        step.value = stepValue
    }
    return { step, moveToStep }
}

export const useGoogleFont = () => {
    const loading = ref(false)
    const loadingFontLink = ref(false)

    watch(formCustomisationData.font_family, (val) => {
        loadingFontLink.value = true
        const url = `https://fonts.googleapis.com/css2?family=${val}:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap`
        insertGoogleFont(url, () => {
            loadingFontLink.value = false
        })
    }, { immediate: true })

    const getFonts = async () => {
        if (fonts.value.length > 0) return
        loading.value = true
        const res = await axios.get('https://fonts.google.com/metadata/fonts')
        fonts.value = res.data.familyMetadataList.map((font: any) => {
            return font.family
        })
        loading.value = false
    }

    return { loading, fonts, getFonts, loadingFontLink }
}
