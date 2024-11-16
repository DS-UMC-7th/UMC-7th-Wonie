import axios from 'axios'

const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
})

const creditInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_CREDIT_TOKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
})

const detailInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DETAIL_TOKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
})

const axiosAuthInstance = axios.create({
    baseURL: 'http://localhost:3000', 
})

export {axiosInstance, creditInstance, detailInstance, axiosAuthInstance}