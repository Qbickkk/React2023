import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import {Comments} from "../CommentsContainer/Comments";

const PostDetails = ({post}) => {
    const {userId,id,title,body} = post;
    const navigate = useNavigate();
    return (
        <ul>
            <li>id:{id}</li>
            <li>userId:{userId}</li>
            <li>title:{title}</li>
            <li>body:{body}</li>
            <button onClick={()=>navigate(-1)}>Back</button>
            <hr/>
            <Comments postId={id}/>
        </ul>
    );
};

export {PostDetails};