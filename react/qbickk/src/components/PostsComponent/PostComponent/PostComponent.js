import React from 'react';
import {useNavigate} from "react-router-dom";

const PostComponent = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    return (
        <div>
            {id} - {title}
            <button
                onClick={()=>{
                    navigate('details', {state:post});
                }}>details</button>
        </div>
    );
};

export {PostComponent};