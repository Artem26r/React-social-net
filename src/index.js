import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './State/redux-store'


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

export let rerenderEntriTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById('root'));
}


rerenderEntriTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntriTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
