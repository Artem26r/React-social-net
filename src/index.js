import './index.css';
import {rerenderEntriTree} from './render'
import * as serviceWorker from './serviceWorker';
import state from './State/state'

rerenderEntriTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
