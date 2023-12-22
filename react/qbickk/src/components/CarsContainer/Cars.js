import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "./Car";
import {carActions} from "../../redux";
import {carService} from "../../services";

const Cars = () => {
    const {cars, isLoading, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        // carService.getAll().then(({data})=>dispatch(carActions.setCars(data)))
        dispatch(carActions.getAll())
    }, [trigger, dispatch()]);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};