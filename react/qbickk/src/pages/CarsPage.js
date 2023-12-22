import React from 'react';

import {CarForm, Cars} from "../components";
import {useSelector} from "react-redux";

const CarsPage = () => {
    const {errors} = useSelector(state => state.cars);
    return (
        <div>
            {errors && <h2>{errors.detail}</h2>}
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};