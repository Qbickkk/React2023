import React from 'react';

import './ProductComponent.module.css'
const ProductComponent = ({item}) => {

const {name,age,info,photo} = item

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h3>{age}</h3>
                <p>{info}</p>
                <img src={photo} alt={'simpson'}/>
                <hr/>
            </div>
        </div>
    );
};

export {ProductComponent};