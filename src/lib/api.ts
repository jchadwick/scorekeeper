import axios from "axios"

export type * from "./api.model"

export const api = axios.create({ baseURL: `${process.env.API_URL}/api` })

export default api