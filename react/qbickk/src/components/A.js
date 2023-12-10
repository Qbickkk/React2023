import React, {useContext} from 'react';
import {B} from "./B";
import {Context} from "../hoc/ContextProvider";

const A = () => {
    const value =  useContext(Context);

    return (
        <div>
            A
            <B/>
        </div>
    );
};

export {A};