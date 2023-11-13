import React from 'react';
import {useForm} from "react-hook-form";

const App = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', {required: true})}/>
                <input {...register('body')}/>
                <button>Save Post</button>
            </form>
        </div>
    );
};

export default App;