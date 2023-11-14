import React, { useState} from 'react';

const App = () => {

    const [user, setUser] = useState({})

   const handler = (event) => {
        event.preventDefault();
        setUser(prevState => ({...prevState, [event.target.name] : event.target.value}))

   }

   console.log(user)

    return (

            <form>
                <input type={"text"} placeholder={'name'} name={'name'} onChange={handler}/>
                <input type={"number"} placeholder={'age'} name={'age'}  onChange={handler}/>
                <button>Save</button>
            </form>

    );
};

export default App;