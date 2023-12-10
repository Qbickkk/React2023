import React  from 'react';
import {A} from "./components/A";
import {ContextProvider} from "./hoc/ContextProvider";


const App = () => {
    return (
        <div>
            <A/>
        </div>
    );
};

export {App};


// import React from 'react';
// import {MyComponent} from "./components/MyComponent";
//
// const App = () => {
//     return (
//         <div>
//             <MyComponent>
//                 <h3>hello</h3>
//             </MyComponent>
//         </div>
//     );
// };
//
// export {App};