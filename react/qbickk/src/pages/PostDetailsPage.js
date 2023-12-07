import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import {postsService} from "../services";
import {PostDetails} from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
};

export {PostDetailsPage};