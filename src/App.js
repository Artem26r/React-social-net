import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
      <div className='container'>
          <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
            Start New Dao
          </div>
      </div>
  )
}

export default App;
