import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const episodeService = {
    getAll: ()=> axiosService.get(urls.episodes.base)
};

export {
    episodeService
}