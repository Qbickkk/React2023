import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carsService} from "../services/carsService";

const CarsContainer = () => {
     const [cars, setCars] = useState([]);

     const [flag, setFlag] = useState(null);

    const [carForUpdate, setCarForUpdate] = useState([])

     const trigger = () =>{
         setFlag(prev=>!prev);
     }

    useEffect(() => {
        carsService.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};