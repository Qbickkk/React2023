import React from 'react';
import {Posts} from "../components/postsContainer/Posts";
import {useLocation} from "react-router-dom";

const PostsPage = () => {
    const {state:userId} = useLocation();
    console.log(userId)

    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage};