/* ----------- RESOURCES ----------- */
import axios, { AxiosInstance } from "axios";


export async function useApi(): Promise<AxiosInstance> {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_URL_API,
        maxRedirects: 2,
        timeout: 60 * 20, // 20 minutos
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer`,
        },
    });

    return api;
}