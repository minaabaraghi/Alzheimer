
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const register = (firstName:string,lastName:string,username:string,password:string): Promise<boolean> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'users',
        data:{firstName,lastName,username,password},
               
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