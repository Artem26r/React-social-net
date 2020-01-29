import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
  return (
      <div className='container'>
          <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
            Start New Dao
              8%
          </div>
      </div>
  )
}

export default App;
