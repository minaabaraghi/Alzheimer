
import { AxiosRequestConfig } from "axios"
import { json } from "stream/consumers";
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const register = (formValues: { firstName: string; lastName: string; username: string; password: string; }): Promise<boolean> => {
    //todo: save jwt to localstorage then return true/false
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'users',
        // body: JSON.stringify(formValues)
        
    }

    return axiosInstance(reqConfig).then((res) => {
        if (res.data) {
            localStorage.setItem('token', res.data);
            return true;
        }
        return false;
    });
}

export default register;