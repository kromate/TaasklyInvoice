// eslint-disable-next-line import/no-absolute-path
import html2canvas from 'html2canvas'
import { useFormatInvoice } from './format'
import { useFormData } from './data'
import { DownloadCanvasAsImage, DownloadCanvasAsPDF } from './generator'

const { defaultLogo, formCustomisationData, formInfoData, formExtraData, formListData, addNewItem, removeItem, resetColors, resetFont, resetLogo, subTotal, total } = useFormData()

export const useCreateInvoice = () => {
    const DownloadOutput = async () => {
        const outputSection: HTMLElement = document.querySelector('#output')!
        const outputContainer: HTMLElement = document.querySelector('#outputContainer')!
        const rect = outputSection.getBoundingClientRect()

        const { formatAfterDownload, formatBeforeDownload } = useFormatInvoice(outputSection, outputContainer)

        formatBeforeDownload()

        const canvas = await html2canvas(outputSection)

        formatAfterDownload()

        if (formExtraData.file.type.value === 'IMG') {
            DownloadCanvasAsImage(canvas, formExtraData.file.name.value)
        } else {
            DownloadCanvasAsPDF(canvas, formExtraData.file.name.value)
        }
    }

    return {
        formCustomisationData, formInfoData, formExtraData, formListData, defaultLogo, resetColors, resetLogo, resetFont, addNewItem, removeItem, subTotal, DownloadOutput, total
    }
}
