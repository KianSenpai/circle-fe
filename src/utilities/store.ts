import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useToast = defineStore('toastMessage', () => {
    const message = ref<string>('')
    const type = ref<'success' | 'fail' | undefined>(undefined)
    function updateMessage(m: string, t: 'success' | 'fail') {
        message.value = m
        type.value = t
    }
    function resetMessage() {
        if (message.value.length > 0) {
            setTimeout(() => {
                message.value = ''
                type.value = undefined
            }, 1000)
        }
    }
    watch(() => message.value, resetMessage)

    return { message, type, updateMessage }
})
