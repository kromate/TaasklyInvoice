export const insertGoogleFont = (fontUrl: string, loadingCallback?: () => void): void => {
  if (process.client && document.head.querySelectorAll(`link[href="${fontUrl}"]`).length > 0) {
    // Font is already loaded, so we don't need to import it again
    loadingCallback?.()
    return
  }

  const linkTag = document.createElement('link')
  linkTag.href = fontUrl
  linkTag.rel = 'stylesheet'

  if (loadingCallback) {
    linkTag.onload = loadingCallback
  }

  document.head.appendChild(linkTag)
  if (linkTag.sheet) {
    if (loadingCallback) {
      loadingCallback()
    }
  }
}

export const formatDate = (inputDate: Date): string => {
  return inputDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })
}

export const convertToCurrency = (value: number) => {
  if (typeof value === 'undefined') return

  let parseAmount
  if (typeof value !== 'number') {
    parseAmount = parseFloat((value as string).replace(',', '').replace(' ', ''))
  } else {
    parseAmount = value
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(parseAmount)
}
