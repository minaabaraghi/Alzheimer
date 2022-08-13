import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const deleteUser = (): Promise<any[]> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'DELETE',
        url: 'users',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }

    }

    return axiosInstance(reqConfig).then((res) => {
        return res.data;
    });
}

export default deleteUser;