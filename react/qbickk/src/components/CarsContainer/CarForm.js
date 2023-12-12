import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const save = async (car) => {
        await carService.create(car);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <div><input type={'text'} placeholder={'brand'} {...register('brand')}/></div>
            <div><input type={'text'} placeholder={'price'} {...register('price')}/></div>
            <div><input type={'number'} placeholder={'year'} {...register('year')}/></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};