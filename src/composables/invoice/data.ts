import { useStorage } from '@vueuse/core'
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
const formExtraData = {
    extra_fees: {
        delivery: useStorage('delivery', 0),
        tax: useStorage('tax', 0),
        discount: useStorage('discount', 0)
    },
    file: {
        name: useStorage('file_name', 'invoice'),
        type: useStorage('file_type', 'IMG')
    },
    notes: {
        note: useStorage('note', ''),
        t_n_c: useStorage('t_n_c', '')
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

export const useFormData = () => {
        const addNewItem = () => {
        const id = formListData.value[formListData.value.length - 1].id + 1
        formListData.value.push({ id, item: '', quantity: 0, price: 0 })
    }
    const subTotal = computed(() => {
        return formListData.value.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
    })
    const total = computed(() => {
        return subTotal.value + formExtraData.extra_fees.delivery.value - formExtraData.extra_fees.discount.value
    })
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
    return {
        formCustomisationData, formInfoData, formExtraData, formListData, defaultLogo, resetColors, resetLogo, resetFont, addNewItem, removeItem, subTotal, total
    }
}
