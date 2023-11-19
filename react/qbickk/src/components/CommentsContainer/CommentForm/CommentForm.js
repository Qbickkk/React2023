import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../../services/commentsService";

const CommentForm = ({setComments}) => {
    const {register,handleSubmit,reset} = useForm({defaultValues:{name: 'default', body: 'default'}});

    const save = async (comment)=>{
        const {data} = await commentsService.postComment(comment);
        setComments(prev=>[...prev, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <input type={'text'} placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};