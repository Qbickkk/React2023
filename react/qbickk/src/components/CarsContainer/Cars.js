import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {carsService} from "../../services";
import {carActions} from "../../redux";

const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carsService.getAll().then(({data})=>dispatch(carActions.setCars(data)))
    }, [trigger, dispatch]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};