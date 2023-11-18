import React from 'react';
import {useForm} from "react-hook-form";
import {postsService} from "../../../services/postsService";

const PostForm = ({setPosts}) => {
    const {register,handleSubmit,reset} = useForm({defaultValues:{title: 'none', body: 'chinazes'}});
    const save = async (post) =>{
         const {data} = await postsService.post(post);
            setPosts(prev=>[...prev, data]);
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'title'} {...register('title')}/>
            <input type={'text'} placeholder={'body'} {...register('body')}/>
            <input type={'text'} placeholder={'house'} {...register('address.house')}/>
            <input type={'text'} placeholder={'street'} {...register('address.street')}/>
            <button>Save Post</button>
        </form>
    );
};

export {PostForm};