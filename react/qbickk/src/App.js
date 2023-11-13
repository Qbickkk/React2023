import React, {useRef} from 'react';

const App = () => {

    const name = useRef();
    const age = useRef();

    const save = (event) => {
        event.preventDefault();
        // console.log(event.target.name.value);
        // console.log(event.target.age.value);
        console.log(name.current.value);
        console.log(age.current.value);
        event.target.reset();
    }
    return (

            <form onSubmit={save}>
                <input type='text' placeholder={'name'} ref={name}/>
                <input type='number' placeholder={'age'} ref={age}/>
                <button>Save</button>
            </form>

    );
};

export default App;