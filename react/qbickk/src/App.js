import React, {useRef, useState} from 'react';

const App = () => {

    const [user, setUser] = useState({});

    // const name = useRef();
    // const age = useRef();
console.log (user)
    const handler = (e) => {
        e.preventDefault();
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const save = (event) =>{
        // event.preventDefault();
        // console.log(event.target.name.value);
        // console.log(event.target.age.value);
        // console.log(name.current.value);
        // console.log(age.current.value);
        // event.target.reset()
    }

    return (
        <form onSubmit={null}>
            <input type={'text'} placeholder={'name'} name={'name'} onChange={handler}/>
            <input type={'text'} placeholder={'age'}  name={'age'} onChange={handler}/>
            <button>Save</button>
        </form>
    );
};

export default App;