import React, {useContext} from 'react';
import {D} from "./D";
import {Context} from "../App";

const C = () => {
    const message = useContext(Context);

    return (
        <div>
            <div>C:{message}</div>
            <D/>
        </div>
    );
};

export {C};