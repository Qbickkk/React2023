import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import {Post} from "./Post/Post";
import css from './Posts.module.css'
import {PostDetails} from "./PostDetails/PostDetails";
const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postById, setPostById] = useState(null);

    useEffect(()=>{
        postsService.getAll().then(({data})=>setPosts(data));
    },[]);

    const click = async (postID) =>{
        const {data} = await postsService.getById(postID);
        setPostById(data);
    }

    return (
        <div className={css.Main}>
            <div className={css.Posts}>
                {posts.map(post=><Post key={post.id} post={post} click={click}/>)}
            </div>
            <hr/>
            <div>
                {postById && <PostDetails postById={postById}/>}
            </div>
        </div>
    );
};

export {Posts};