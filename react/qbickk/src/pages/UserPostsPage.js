import React, {useEffect} from 'react';
import {useLoaderData, useLocation, useParams} from "react-router-dom";

const UserPostsPage = () => {
    // const {id} = useParams();
    // console.log(id);
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/` + id + `/posts`).then(value => value.json()).then(value => console.log(value));
    // }, [id]);

   const posts =  useLoaderData();
   console.log(posts);

    return (
        <div>
            <ul>
            {posts.map(post=><li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
};

export {UserPostsPage};