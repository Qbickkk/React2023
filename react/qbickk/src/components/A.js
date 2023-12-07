import React, {useContext} from 'react';
import {B} from "./B";
import {Context} from "../App";

const A = () => {
    const message = useContext(Context);
    return (
        <div>
            <div>A:{message}</div>
            <B/>
        </div>
    );
};

export {A};