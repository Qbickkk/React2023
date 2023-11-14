import React from 'react';

const App = () => {



    const save = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.age.value);
    }

    return (

            <form onSubmit={save}>
                <input type={"text"} placeholder={'name'} name={'name'}/>
                <input type={"number"} placeholder={'age'} name={'age'}/>
                <button>Save</button>
            </form>

    );
};

export default App;