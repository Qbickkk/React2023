import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentsService = {
    getByPostId: (postId)=> axiosService.get(urls.comments, {params: {postId}})
};

export {
    commentsService
}