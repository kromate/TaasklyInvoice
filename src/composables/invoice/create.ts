// eslint-disable-next-line import/no-absolute-path
import { useStorage } from '@vueuse/core'
import html2canvas from 'html2canvas'
import html2pdf from 'html2pdf.js'
import defaultLogo from '@/assets/images/logo.svg'
import { formatDate } from '@/composables/utils'

const formCustomisationData = {
    background_color: useStorage('background_color', '#ffffff'),
    text_color: useStorage('text_color', '#000000'),
    color_mode: useStorage('color_mode', false),
    font_family: useStorage('font_family', 'Space Grotesk'),
    logo: {
        url: useStorage('logo_url', defaultLogo),
        width: useStorage('logo_width', 25),
        logoName: useStorage('logo_name', 'logo.png')
    }
}

const formInfoData = {
    from: {
        name: useStorage('from_name', 'Hot bread'),
        address: useStorage('from_address', '1234 Oven Street')
    },
    to: {
        name: useStorage('to_name', 'Anthony Kromate'),
        address: useStorage('to_address', '1234 Baker Street')
    },
    dates: {
        issued: useStorage('issued', '30 July 2023'),
        due: useStorage('due', `${formatDate(new Date())}`)
    }
}

type FormList = {
    id: number;
    item: string;
    quantity: number;
    price: number;
}

const formListData = useStorage('form_list',
    [{ id: 1, item: 'Bread', quantity: 5, price: 1000 }] as FormList[]
)

export const useCreateInvoice = () => {
    const addNewItem = () => {
        const id = formListData.value[formListData.value.length - 1].id + 1
        formListData.value.push({ id, item: '', quantity: 0, price: 0 })
    }
    const subTotal = () => {
        return formListData.value.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
    }
    const removeItem = (id: number) => {
        formListData.value = formListData.value.filter((item) => item.id !== id)
    }
    const resetColors = () => {
        formCustomisationData.background_color.value = '#ffffff'
        formCustomisationData.text_color.value = '#000000'
        formCustomisationData.color_mode.value = false
    }
    const resetLogo = () => {
        formCustomisationData.logo.url.value = defaultLogo
        formCustomisationData.logo.logoName.value = 'logo.png'
        formCustomisationData.logo.width.value = 25
    }
    const resetFont = () => {
        formCustomisationData.font_family.value = 'Space Grotesk'
    }
    const DownloadOutput = async () => {
        const outputSection = document.querySelector('#output')
        const outputContainer = document.querySelector('#outputContainer')

        const formerWidth = outputSection?.style.width
        const formerDisplay = outputContainer?.style.display
        const formerPos = outputSection?.style.position
        const formerzIndex = outputSection?.style.zIndex
        outputSection.style.width = '600px'
        outputContainer.style.display = 'flex'
        outputContainer.style.position = 'fixed'
        outputContainer.style.zIndex = '-100'

        const canvas = await html2canvas(outputSection as HTMLElement)
        // html2pdf().from(outputSection as HTMLElement).save('invoice.pdf')

        outputSection.style.width = formerWidth
        outputContainer.style.display = formerDisplay
        outputContainer.style.position = formerPos
        outputContainer.style.zIndex = formerzIndex
        DownloadCanvasAsImage(canvas, 'invoice')
    }
    return {
        formCustomisationData, formInfoData, formListData, defaultLogo, resetColors, resetLogo, resetFont, addNewItem, removeItem, subTotal, DownloadOutput
    }
}

const DownloadCanvasAsImage = (canvas: HTMLCanvasElement, name: string) => {
    const downloadLink = document.createElement('a')
    downloadLink.setAttribute('download', `${name}.png`)
    const dataURL = canvas.toDataURL('image/png')
    const url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream')
    downloadLink.setAttribute('href', url)
    downloadLink.click()
}
