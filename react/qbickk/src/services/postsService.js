import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getByPostId: (id) => axiosService.get(urls.posts.byId(id))
};

export {
    postsService
}