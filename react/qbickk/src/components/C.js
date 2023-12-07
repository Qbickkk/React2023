import React from 'react';
import {Context} from "../index";

const C = () => {
    return (
        <div>
            C component
            <Context.Consumer>
                {(value)=>{
                    return <h4>{value}</h4>
                }}
            </Context.Consumer>
        </div>
    );
};

export {C};