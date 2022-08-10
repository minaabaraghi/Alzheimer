
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"

const register = (firstName: string, lastName: string,username: string, password: string): Promise<boolean> => {
    //todo: save jwt to localstorage then return true/false
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'users',
        data: { firstName, lastName,username,password}
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