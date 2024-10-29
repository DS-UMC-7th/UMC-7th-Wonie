import axios from 'axios'

const detailInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DETAIL_TOKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
})

export {detailInstance}