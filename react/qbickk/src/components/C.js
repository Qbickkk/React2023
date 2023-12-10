import React from 'react';
 import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    const value =  useAppContext()

    return (
        <div>
            C : {value}
        </div>
    );
};

export {C};