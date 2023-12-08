import axios from "axios";
import {baseURL} from "../constans /urls";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(request=>{
    request.headers['x-rapidapi-key'] = 'bfcb531563a52227aa672f5ae3df8044';
    return request
})

export {
    axiosService
}