import React from 'react';
import css from './PostDetails.module.css';
const PostDetails = ({postById}) => {
    const {userId,id,title,body} = postById;
    return (
        <div className={css.DetailsMain}>
        <div className={css.Details}>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>

        </div>
    );
};

export {PostDetails};