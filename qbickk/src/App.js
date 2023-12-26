import React, { useState} from 'react';

const App = () => {

    let [counter, setCounter] = useState({value: 0});
    const onClickIncrement = () => {
        counter.value++;
        setCounter({...counter});
    };
    const onClickDecrement = () => {
        counter.value--;
        setCounter({...counter});
    }

    return (
        <div>
            <h1>counter: {counter.value}</h1>
            <button onClick={onClickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>
        </div>
    );
};

export default App;