import React, {useState} from 'react';

const App = () => {

    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    // const onLoginChange = (event) => {
    //     setLogin(event.target.value);
    // }
    // const onPasswordChange = (event) => {
    //     setPassword(event.target.value);
    // }

    const [formState, setFormState] = useState({login: '', password: ''});


    const onSubmit = (event) => {
         console.log(event.target.login.value);
         console.log(event.target.password.value);
         event.preventDefault();
         console.log(formState);
         //send to api
    }

    const onChange = (e) => {
        console.log({[e.target.name]: e.target.value});
        setFormState({...formState, [e.target.name]: e.target.value});
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={"text"} name={'login'} value={formState.login} onChange={onChange}/>
                <input type={"text"} name={'password'} value={formState.password} onChange={onChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;