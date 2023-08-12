import { useElementSize, useMediaQuery } from '@vueuse/core'

const globalData = ref({
    formerWidth: '',
    formerHeight: '',
    formerDisplay: '',
    formerPos: '',
    formerzIndex: ''
}) as any

export const useFormatInvoice = (outputSection: HTMLElement, outputContainer: HTMLElement) => {
    const thElements = document.querySelectorAll<HTMLElement>('#output thead th')
    const upElements = document.querySelectorAll<HTMLElement>('#output td.up')
    const attributionElement = document.querySelector<HTMLElement>('#attribution')

    // -bottom-20

//     const invoiceDocumentHeight = computed(() => {
//         const { height } = useElementSize(outputSection)
//     return outputSection.offsetHeight || height.value || 1000
// })

    const formatBeforeDownload = () => {
        thElements.forEach((thElement: HTMLElement) => {
            thElement.classList.add('pb-4')
        })
        upElements.forEach((thElement: HTMLElement) => {
            thElement.classList.add('pb-4')
        })

        const rect = outputSection.getBoundingClientRect()

        globalData.formerWidth = outputSection.style.width

        outputSection.style.width = '600px'
    }

    const formatAfterDownload = () => {
        thElements.forEach((thElement: HTMLElement) => {
            thElement.classList.remove('pb-4')
        })
        upElements.forEach((thElement: HTMLElement) => {
            thElement.classList.remove('pb-4')
        })
        // attributionElement?.classList.add('bottom-4')
        // attributionElement?.classList.remove('-bottom-20')

        outputSection.style.width = globalData.formerWidth
    }

    return {
        formatBeforeDownload, formatAfterDownload
    }
}
