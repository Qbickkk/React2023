import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getAll: ()=> axiosService.get(urls.posts),
    post: (post)=> axiosService.post(urls.posts, post)
};

export {
    postsService
}