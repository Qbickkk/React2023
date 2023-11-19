import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../../services/usersService";

const UserForm = ({setUsers}) => {
    const {register,handleSubmit,reset} = useForm({defaultValues:{name:'default', username:'default'}});
    const save = async (user) => {
        const {data} = await usersService.postUser(user);
        setUsers(prev=>[...prev, data]);
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};