import React from 'react';
import './App.css';
import Container_up from "./components/container_up/Container_up";
import {BrowserRouter} from 'react-router-dom'


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='full_content'><Container_up state={props.state}/></div>
        </BrowserRouter>
    )
}

export default App;
