
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const login = (username: string, password: string): Promise<any> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'auth',
        data: { username, password }
    }

    return axiosInstance(reqConfig).then((res) => res.data);
}

export default login;