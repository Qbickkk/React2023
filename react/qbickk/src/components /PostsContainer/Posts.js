import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services /postsService";
import {Post} from "./Post";

const Posts = ({posts}) => {
    const {userId} = useParams();
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     postsService.postByUserId(userId).then(({data})=>setPosts(data))
    // }, [userId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};