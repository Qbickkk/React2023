import {axiosService} from "./axiosService";
import {urls} from "../constans /urls";

const postsService = {
    postByUserId: (userId)=> axiosService.get(urls.posts.byUserId(userId))
};

export {
    postsService
}