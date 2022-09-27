import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const SandboxServer = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/",
  timeout: 8000
})
export const Giphy = Axios.create({
  baseURL: "https://api.giphy.com",
  timeout: 8000,
  params: {
    api_key: 'W9m3HbtWNVcnPg459tVMcPrKvqwgvnWh'
  }
})
