import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/postsService";
import {PostComponent} from "./PostComponent/PostComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(posts=>setPosts(posts))
    }, []);

    return (
        <div>
            {posts.map(post=><PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};