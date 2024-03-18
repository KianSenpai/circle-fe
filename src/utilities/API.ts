import axios from 'axios'
import { ref } from 'vue'

const baseURL = 'http://localhost:8000'

export interface IBook {
    id: number
    title: string
    author: string
    price: number
    isbn: string
    availableStock: number
}

export interface IBooks {
    books: IBook[]
}

export interface IBookDetail {
    book: IBook
}

export interface IAddToCart {
    message: string
    book: IBook
}

export async function getBookList() {
    const data = ref<IBooks | undefined>(undefined)
    const isLoading = ref(true)
    const error = ref(undefined)

    await axios
        .get<IBooks>(`${baseURL}/books`)
        .then((res) => {
            data.value = res.data
            isLoading.value = false
        })
        .catch((err) => {
            error.value = err.message
            isLoading.value = false
        })

    return { data: data.value, isLoading: isLoading.value, error: error.value }
}

export async function getBookDetail(bookId: number) {
    const data = ref<IBookDetail | undefined>(undefined)
    const isLoading = ref(true)
    const error = ref(undefined)

    await axios
        .get<IBookDetail>(`${baseURL}/books/${bookId}`)
        .then((res) => {
            data.value = res.data
            isLoading.value = false
        })
        .catch((err) => {
            error.value = err.message
            isLoading.value = false
        })

    return { data: data.value, isLoading: isLoading.value, error: error.value }
}

export async function addToCart(bookId: number) {
    const data = ref<IAddToCart | undefined>(undefined)
    const isLoading = ref(true)
    const error = ref(undefined)

    await axios
        .post(`${baseURL}/books/${bookId}/purchase`)
        .then((res) => {
            data.value = res.data
            isLoading.value = false
        })
        .catch((err) => {
            error.value = err.message
            isLoading.value = false
        })

    return { data: data.value, isLoading: isLoading.value, error: error.value }
}
