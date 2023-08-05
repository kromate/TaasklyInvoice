
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

    const formatBeforeDownload = () => {
        thElements.forEach((thElement: HTMLElement) => {
            thElement.classList.add('pb-4')
        })
        upElements.forEach((thElement: HTMLElement) => {
            thElement.classList.add('pb-4')
        })

        globalData.formerWidth = outputSection?.style.width
        globalData.formerHeight = outputContainer?.style.height
        globalData.formerDisplay = outputContainer?.style.display
        globalData.formerPos = outputContainer?.style.position
        globalData.formerzIndex = outputContainer?.style.zIndex

        outputSection.style.width = '600px'
        outputContainer.style.display = 'flex'
        outputContainer.style.position = 'fixed'
        outputContainer.style.height = outputSection.offsetHeight + 30 + 'px'
        outputContainer.style.zIndex = '-100'

        attributionElement?.classList.remove('bottom-4')
        attributionElement?.classList.add('-bottom-20')
    }

    const formatAfterDownload = () => {
        thElements.forEach((thElement: HTMLElement) => {
            thElement.classList.remove('pb-4')
        })
        upElements.forEach((thElement: HTMLElement) => {
            thElement.classList.remove('pb-4')
        })
        attributionElement?.classList.add('bottom-4')
        attributionElement?.classList.remove('-bottom-20')

        outputSection.style.width = globalData.formerWidth
        outputContainer.style.height = globalData.formerHeight
        outputContainer.style.display = globalData.formerDisplay
        outputContainer.style.position = globalData.formerPos
        outputContainer.style.zIndex = globalData.formerzIndex
    }

    return {
        formatBeforeDownload, formatAfterDownload
    }
}
