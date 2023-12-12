import React from 'react';
import {useNavigate} from "react-router-dom";

const Episode = ({data}) => {
    const {id,name,episode} = data;
    const navigate = useNavigate();
    const getCharacters = () => {
        navigate('/characters')
    };

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>episode:{episode}</div>
            <button onClick={getCharacters}>Characters</button>
            <hr/>
        </div>
    );
};

export {Episode};