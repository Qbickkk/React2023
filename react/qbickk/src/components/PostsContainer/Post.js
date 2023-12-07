import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    const navigate = useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>navigate(`${id}`)}>Post Details</button>
            <hr/>
        </div>
    );
};

export {Post};