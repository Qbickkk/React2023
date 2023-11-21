import React from 'react';
import {useLocation} from "react-router-dom";
import {
    PostDetailsComponent
} from "../components/PostsComponent/PostComponent/PostDetailsComponent/PostDetailsComponent";

const PostDetailsPage = () => {
  const {state} = useLocation();
  console.log(state);
    return (
        <div>
           <PostDetailsComponent post={state}/>
        </div>
    );
};

export {PostDetailsPage};