// eslint-disable-next-line import/no-absolute-path
import { useStorage } from '@vueuse/core'
// @ts-expect-error
import defaultLogo from '@/assets/images/logo.svg'

const formCustomisationData = {
    background_color: useStorage('background_color', '#ffffff'),
    text_color: useStorage('text_color', '#000000'),
    font_family: useStorage('font_family', 'Nunito'),
    logo: {
        url: useStorage('logo_url', defaultLogo),
        width: useStorage('logo_width', 25),
        logoName: useStorage('logo_name', 'logo.png')
    }

}

export const useCreateInvoice = () => {
    const resetColors = () => {
        formCustomisationData.background_color.value = '#ffffff'
        formCustomisationData.text_color.value = '#000000'
    }
    const resetLogo = () => {
        formCustomisationData.logo.url.value = defaultLogo
        formCustomisationData.logo.logoName.value = 'logo.png'
        formCustomisationData.logo.width.value = 25
    }
    const resetFont = () => {
        formCustomisationData.font_family.value = 'Nunito'
    }
    return {
        formCustomisationData, defaultLogo, resetColors, resetLogo, resetFont
    }
}
