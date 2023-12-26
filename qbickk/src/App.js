import React from 'react';
import FirstComponent from "./components/first-component/FirstComponent";

const App = () => {
    return (
        <div>
            <FirstComponent txt={'Bart Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
            <FirstComponent txt={'Homer Simpson'} image={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}/>
        </div>
    );
};

export default App;