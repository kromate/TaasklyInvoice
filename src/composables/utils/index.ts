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
    // Add an event listener to check when the font is loaded
    linkTag.onload = loadingCallback
  }

  document.head.appendChild(linkTag)

  // If the font is already loaded (cached), invoke the loading callback directly
  if (linkTag.sheet) {
    if (loadingCallback) {
      loadingCallback()
    }
  }
}
