import React, {useEffect, useState} from 'react';
import {PostForm} from "./PostForm/PostForm";
import {Posts} from "./Posts/Posts";
import {postsService} from "../../services/postsService";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
            postsService.getAll().then(({data}) => setPosts(data))
    }, []);
    
    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostsContainer};