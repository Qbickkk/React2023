import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";

const LoginForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();
    const {setIsAuth, setMe} = useAppContext();

    const login = async (user)=> {
        try {
            await authService.login(user);
            const {data} = await authService.me();
            setMe(data);
            setServerError(null);
            navigate('/cars');
            setIsAuth(true);
        }catch (e) {
            setServerError(e.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            {serverError&&<div>Username or Password incorrect</div>}
           <div>username: <input type={'text'} {...register('username')}/></div>
           <div>password: <input type={'password'} {...register('password')}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};