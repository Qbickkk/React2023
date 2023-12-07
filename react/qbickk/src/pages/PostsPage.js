import React from 'react';
import {useParams} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {
    return (
        <div>
            <Posts/>
        </div>
    );
};

export {PostsPage};