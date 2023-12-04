import React from 'react';
import {Posts} from "../components /PostsContainer/Posts";
import {useLoaderData} from "react-router-dom";

const PostsPage = () => {
   const {data} = useLoaderData();

    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export {PostsPage};