import {axiosService} from "./axiosService";
import {urls} from "../constants /urls";

const commentsService = {
    getAll: ()=> axiosService.get(urls.comments),
    postComment: (comment)=> axiosService.post(urls.comments, comment)
};

export {
    commentsService
}