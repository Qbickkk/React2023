import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {carsService} from "../../services/carsService";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
   const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carsService.getAllCars().then(({data})=>setCars(data));
    }, [carForUpdate]);
    
    return (
        <div>
            <CarForm setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};