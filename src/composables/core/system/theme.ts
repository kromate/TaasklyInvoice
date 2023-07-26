import { useStorage, useDark } from '@vueuse/core'

const themeOptions = ref([{ name: 'Light Mode', value: 'light' }, { name: 'Dark Mode', value: 'dark' }, { name: 'System Mode', value: 'system' }])
const isDark = useDark()
const colorMode = useStorage('taaskly_theme', 'system')

const htmlThemeSetter = (theme: string) => {
    if (process.server) return
    if (theme !== 'system') {
        document.documentElement.setAttribute('theme', theme)
    } else if (isDark.value) {
            document.documentElement.setAttribute('theme', 'dark')
        } else {
            document.documentElement.setAttribute('theme', 'light')
        }
}

watch([colorMode, isDark], (value) => {
    htmlThemeSetter(value[0])
}, { immediate: true })

export const useThemeController = () => {
    return {
        colorMode, themeOptions
    }
}
