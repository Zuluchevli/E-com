import { registerURL } from "./api";
import axios from "axios";

export async function registerUser(data) {
    let res = await axios.post(registerURL, data);
    return res;
}
export async function loginUser(email, password) {
    let res = await axios.get(`${registerURL}?email=${email}&password=${password}`);
    return res;
}
