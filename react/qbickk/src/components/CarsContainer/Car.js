import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import {carsService} from "../../services";

const Car = ({car}) => {
    const {id,brand,year,price} = car;
    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carsService.deleteById(id)
        dispatch(carActions.trigger())
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <br/>
            <br/>
        </div>
    );
}

export {Car};