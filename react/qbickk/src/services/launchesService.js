import {spaceXService} from "./spaceXService";
import {urls} from "../constants/urls";

const launchesService = {
    getAll: () => spaceXService.get(urls.base)
};

export {
    launchesService
}