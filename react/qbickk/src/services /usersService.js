import {axiosService} from "./axiosService";
import {urls} from "../constans /urls";

const usersService = {
    getAll: ()=> axiosService.get(urls.users)
};

export {
    usersService
}