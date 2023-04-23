import axios from "axios";

const tokenApi = "";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API,
    maxRedirects: 2,
    timeout: 60 * 20, // 20 minutos
    headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${tokenApi}`,
    },
});

export default api;
