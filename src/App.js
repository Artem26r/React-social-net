import React from 'react';
import './App.css';
import Container_up from "./components/container_up/Container_up";
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
      <BrowserRouter>
      <div className='full_content'>
        <Container_up />
      </div>
      </BrowserRouter>
  )
}

export default App;
