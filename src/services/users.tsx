import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const users = (): Promise<any[]> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'GEt',
        url: 'users',

    }

    return axiosInstance(reqConfig).then((res) => {
        return res.data;
    });
}

export default users;