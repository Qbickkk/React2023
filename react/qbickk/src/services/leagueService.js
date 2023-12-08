import {axiosService} from "./axiosService";
import {urls} from "../constans /urls";

const leagueService = {
    getAll: ()=> axiosService.get(urls.leagues)
};

export {
    leagueService
}