import axios from "axios";

export default class LoginService {
    apiBaseUrl = "https://pori-movie-collection.herokuapp.com/api/";

    login(username: string, password: string): Promise<string> {
        return axios.post(this.apiBaseUrl + "auth", { username: username, password: password });
    }
}