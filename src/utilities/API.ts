import axios from 'axios'

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
    return await axios.get<IBooks>(`${baseURL}/books`).then((res) => res.data)
}

export async function getBookDetail(bookId: number) {
    return await axios
        .get<IBookDetail>(`${baseURL}/books/${bookId}`)
        .then((res) => res.data)
}
