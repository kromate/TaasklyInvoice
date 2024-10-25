let initializedClicks = false

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
      useTrackEvent('page_view', { page_path: to.fullPath, page_title: to.meta.title as string || 'Untitled Page' })
      try {
        if (!initializedClicks) {
            trackClicks()
            initializedClicks = true
        }
    } catch (error) {
      console.error('Google Analytics initialization failed', error)
    }
  }
})

const trackClicks = () => {
  document.addEventListener('click', (mouse_event: MouseEvent) => {
        const target = mouse_event.target as HTMLElement
        const label = target.getAttribute('data-ga-label') || target.innerText || target.tagName

         useTrackEvent('click', {
          event_category: 'engagement',
          event_label: label
        })
      })
}
