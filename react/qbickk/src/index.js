import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {store} from "./redux/store";
import {Header} from "./components/Header";
import {ComponentOne} from "./components/ComponentOne";
import {ComponentTwo} from "./components/ComponentTwo";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <Header/>
        <ComponentOne/>
         <ComponentTwo/>
  </Provider>
);

