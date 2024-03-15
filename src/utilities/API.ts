import axios from 'axios'

const baseURL = 'http://localhost:8000/books'

export default function getBookList() {
    axios.get(`${baseURL}/`).then((res) => console.log(res.data))
}
