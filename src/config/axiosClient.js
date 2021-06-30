import axios from 'axios'

const url =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PRODUCTION_BACKEND_URL
    : process.env.REACT_APP_DEVELOPMENT_BACKEND_URL

console.log(url)

const axiosConfig = {
  baseURL: url,
}

const axiosClient = axios.create(axiosConfig)

export default axiosClient
