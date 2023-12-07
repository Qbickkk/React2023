import React from 'react';
import {B} from "./B";
import {useAppContext} from "../hooks/useAppContext";

const A = () => {
    const message = useAppContext()
    return (
        <div>
            <div>A:{message}</div>
            <B/>
        </div>
    );
};

export {A};