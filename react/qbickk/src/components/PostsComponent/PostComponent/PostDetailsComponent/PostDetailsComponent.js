import React from 'react';

const PostDetailsComponent = ({post}) => {
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export {PostDetailsComponent};