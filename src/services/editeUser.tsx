import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const editeUser = (id:any): Promise<any[]> => {
        
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: `users`,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }

    }

    return axiosInstance(reqConfig).then((res) => {
        return res.data;
    });
}

export default editeUser;