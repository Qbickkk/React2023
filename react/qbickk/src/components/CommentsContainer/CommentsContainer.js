import React, {useEffect, useState} from 'react';
import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";
import {commentsService} from "../../services/commentsService";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};