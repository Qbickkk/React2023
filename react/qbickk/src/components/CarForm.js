import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";
import {carsService} from "../services/carsService";

const CarForm = ({trigger,carForUpdate,setCarForUpdate}) => {
   const {register, handleSubmit,reset,formState:{errors,isValid}, setValue } = useForm({mode:'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);
   const save = async (car) => {
        await carsService.postCar(car)
       trigger()
       reset()
   };

   const update = async (car) => {
    await carsService.updateById(carForUpdate.id, car);
    trigger();
    setCarForUpdate(null);
    reset();
   };

    return (
        <div>
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'number'} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type={'number'} placeholder={'year'} {...register('year',{valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
        </form>
            {errors.brand && <div>brand:{errors.brand.message}</div>}
            {errors.price && <div>price:{errors.price.message}</div>}
            {errors.year && <div>year:{errors.year.message}</div>}
        </div>
    );
};

export {CarForm};