import React, { useState} from 'react';

const App = () => {

    // const [users, setUsers] = useState([]);
    // users => getter => отримуємо значення
    // setUsers => setter => впроваджуємо значення

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             console.log('22');
    //             setUsers(value)
    //         })
    // }, []);

    let [counter, setCounter] = useState(0);
    const onClickIncrement = () => {
        counter++;
        setCounter(counter);
    };
    const onClickDecrement = () => {
        counter--;
        setCounter(counter);
    }

    return (
        <div>
            <h1>counter: {counter}</h1>
            <button onClick={onClickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>
        </div>
    );
};

export default App;