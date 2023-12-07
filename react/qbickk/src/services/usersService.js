import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const usersService = {
    getAll: ()=> axiosService.get(urls.users.base),
    getById: (id)=>axiosService.get(urls.users.byId(id))
};

export {
    usersService
}