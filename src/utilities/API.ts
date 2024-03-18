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
        .catch((err) => (error.value = err))

    return { data: data.value, isLoading: isLoading.value, error: error.value }
}

export async function getBookDetail(bookId: number) {
    return await axios
        .get<IBookDetail>(`${baseURL}/books/${bookId}`)
        .then((res) => res.data)
}

export async function postAddBookToCart(bookId: number) {
    return await axios
        .post(`${baseURL}/books/${bookId}/purchase`)
        .then((res) => console.log(res))
}
