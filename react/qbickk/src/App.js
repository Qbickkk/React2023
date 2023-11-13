import React, {createRef} from 'react';

const App = () => {
    const login = createRef();
    const password = createRef();

    const onSubmit = (e) => {
        console.log(login.current.value);
        console.log(password.current.value);
        e.preventDefault();

        //create obj && send to api
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={'text'} name={'login'} ref={login}/>
                <input type={'text'} name={'password'} ref={password}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default App;