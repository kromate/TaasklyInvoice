// eslint-disable-next-line import/no-absolute-path
import { useStorage } from '@vueuse/core'
import defaultLogo from '@/assets/images/logo.svg'

const formCustomisationData = {
    background_color: useStorage('background_color', '#ffffff', sessionStorage),
    text_color: useStorage('text_color', '#000000', sessionStorage),
    logo: {
        url: ref(defaultLogo),
        width: ref(100),
        height: ref(100)
    }
}

export const useCreateInvoice = () => {
    return {
        formCustomisationData
    }
}
