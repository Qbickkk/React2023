import React from 'react';
import {useForm} from "react-hook-form";

const App = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues:{title: 'title default', body: 'body default'}});

    const onSubmit = (data) => {
        console.log(data);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', {required: true})}/>
                {errors.title && <span>error</span>}
                <input {...register('body')}/>
                <button>Save Post</button>

                <select {...register('userId')}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>
            </form>
        </div>
    );
};

export default App;