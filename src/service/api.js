import axios from "axios";

const api = axios.create({
    baseURL: 'https://pontotrilha.onrender.com',
})
export default api;