import axios from "axios";

export async function apiCep(data) {
    return axios.get(`https://viacep.com.br/ws/${data}/json/`)
    .catch(e => console.log(e))
} 
