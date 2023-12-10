import React from 'react';
import {C} from "./C";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const value = useAppContext();
    return (
        <div>
            B : {value}
            <C/>
        </div>
    );
};

export {B};