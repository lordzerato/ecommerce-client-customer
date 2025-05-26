import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-production-70da.up.railway.app/',
  headers: {
    access_token: localStorage.getItem('access_token')
  }
})

export default instance
