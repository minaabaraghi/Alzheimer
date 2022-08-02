
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const login = (username: string, password: string): Promise<boolean> => {
    //todo: save jwt to localstorage then return true/false
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'auth',
        data: { username, password }
    }

    return axiosInstance(reqConfig).then((res) => {
        localStorage.setItem('token', res.data);
        if (res.data) {
            return true;
        }
        return true;
    });
}

export default login;