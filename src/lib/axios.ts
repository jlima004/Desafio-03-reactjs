import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  params: {
    Authorization: import.meta.env.VITE_GITHUB_TOKEN,
  },
})
