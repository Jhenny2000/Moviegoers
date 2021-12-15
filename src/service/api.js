import axios from 'axios';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'
})

export const apiKey = '77bc1918a02ebe6043c9270327378c97';