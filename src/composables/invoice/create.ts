// eslint-disable-next-line import/no-absolute-path
import html2canvas from 'html2canvas'
import html2pdf from 'html2pdf.js'
import { useMediaQuery } from '@vueuse/core'
import { useFormatInvoice } from './format'
import { useFormData } from './data'
import { imageGenerator } from './generator'

const { defaultLogo, formCustomisationData, formInfoData, formExtraData, formListData, addNewItem, removeItem, resetColors, resetFont, resetLogo, subTotal, total } = useFormData()

export const useCreateInvoice = () => {
    const DownloadOutput = async () => {
        // const isLargeScreen = useMediaQuery('(min-width: 768px)')
        const outputSection: HTMLElement = document.querySelector('#output')!
        const outputContainer: HTMLElement = document.querySelector('#outputContainer')!
        const rect = outputSection.getBoundingClientRect()
        console.log(rect.height, rect.width)
        // imageGenerator(outputSection)
        const { formatAfterDownload, formatBeforeDownload } = useFormatInvoice(outputSection, outputContainer)

            formatBeforeDownload()

        const canvas = await html2canvas(outputSection)
console.log(canvas)
console.log(rect.height, rect.width)
            formatAfterDownload()

        if (formExtraData.file.type.value === 'IMG') {
            DownloadCanvasAsImage(canvas, formExtraData.file.name.value)
        } else {
            html2pdf().from(canvas).save(formExtraData.file.name.value)
        }
    }

    return {
        formCustomisationData, formInfoData, formExtraData, formListData, defaultLogo, resetColors, resetLogo, resetFont, addNewItem, removeItem, subTotal, DownloadOutput, total
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
