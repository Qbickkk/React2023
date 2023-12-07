import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services";
import {Post} from "./Post";

const Posts = () => {
    const {userId} = useParams();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getByUserId(userId).then(({data})=>setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};