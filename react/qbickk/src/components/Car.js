import React from 'react';
import {carsService} from "../services/carsService";

const Car = ({car,setCarForUpdate,trigger}) => {
    const {id,brand,price,year} = car;

    const del = async ()=>{
        await carsService.deleteById(id)
        trigger()
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={del}>delete</button>
            <br/>
            <br/>
        </div>
    );
};

export {Car};