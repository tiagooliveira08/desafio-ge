import axios from "axios";

const api = axios.create({
	baseURL : "https://api-globo-esporte.herokuapp.com"
})

export default api;