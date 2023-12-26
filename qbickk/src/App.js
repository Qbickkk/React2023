import React from 'react';
import {ProductComponent} from "./components/products/ProductComponent";
import {simpsons} from "./data/data";

const App = () => {
    return (
        <div>
            {simpsons.map((simpson, index) => (
                <ProductComponent key={index} item={simpson}/>
            ))}
        </div>
    );
};

export default App;