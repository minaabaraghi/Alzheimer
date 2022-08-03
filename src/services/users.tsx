import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const users = (): Promise<boolean> => {
    //todo: save jwt to localstorage then return true/false
    const reqConfig: AxiosRequestConfig = {
        method: 'GEt',
        url: 'users',
        data: {  }
    }

    return axiosInstance(reqConfig).then((res) => {
        if (res.data) {
            return true;
        }
            return false;
    });
}

export default users;