import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getByUserId: (userId)=>axiosService.get(urls.posts.byUserId(userId))
};
export {
    postsService
}