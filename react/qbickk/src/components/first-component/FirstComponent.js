import React from 'react';
import './FirstComponent.module.css';

const FirstComponent = (props) => {

    const {txt,image} = props

    console.log(props)
    console.log(txt)
    console.log(image)

    return (
        <div>
            <p>{txt}</p>
            <img src={image} alt={'qwerty'}/>
            <hr/>
        </div>
    );
};

export  default FirstComponent;