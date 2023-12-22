import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};