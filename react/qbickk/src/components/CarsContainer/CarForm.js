import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/carValidator";
import {carsService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register,reset,handleSubmit,formState:{errors, isValid}, setValue } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);


    const save = async (car) => {
        await carsService.create(car);
        dispatch(carActions.trigger());
        reset();
    };

    const update = async (car) => {
        await carsService.updateById(carForUpdate.id, car)
        dispatch(carActions.trigger());
        dispatch(carActions.setCarForUpdate(null))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>price: {errors.price.message}</div>}
            {errors.year && <div>year: {errors.year.message}</div>}
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'number'} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type={'number'} placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};