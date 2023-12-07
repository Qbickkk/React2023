import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {usersService} from "../../services";

const UserDetails = ({user}) => {

    const {id,name,username, email,address:{street}} = user;
    const navigate = useNavigate();

    return (
        <ul>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>username:{username}</li>
            <li>email:{email}</li>
            <li>street:{street}</li>
            <button onClick={()=>navigate('posts')}>Get Posts</button>
            <button onClick={()=>navigate(-1)}>Back</button>
        </ul>
    );
};

export {UserDetails};