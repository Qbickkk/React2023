import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <br/>
        </div>
    );
};

export {Todo};