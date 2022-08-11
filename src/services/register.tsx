
import { AxiosRequestConfig } from "axios"
import { json } from "stream/consumers";
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const register = (): Promise<boolean> => {
    
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'users',
        // body: JSON.stringify()
        
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