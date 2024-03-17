import axios from 'axios'

const baseURL = 'http://localhost:8000/books'

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

export default async function getBookList() {
    return await axios.get<IBooks>(`${baseURL}/`).then((res) => res.data)
}
