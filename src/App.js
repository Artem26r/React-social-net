import React from 'react';
import './App.css';
import ContainerUp from "./components/container_up/ContainerUp";
import {BrowserRouter} from 'react-router-dom'


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='full_content'><ContainerUp state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/></div>
        </BrowserRouter>
    )
}

export default App;
