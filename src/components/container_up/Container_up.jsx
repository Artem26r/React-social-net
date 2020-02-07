import React from 'react';
import classes from './Container_up.module.css';
import {Route} from 'react-router-dom';
import Header from "./Header/Header";
import Navbar from './Navbar/Navbar';
import Dialogs from "./dynamic_window/Dialogs/Dialogs";
import Profile from './dynamic_window/Profile/Profile';
import News from "./dynamic_window/News/News";
import Music from "./dynamic_window/Music/Music";
import Setting from "./dynamic_window/Setting/Setting";


const Container_up = (props) => {

    return (
      <div className='container'>
          <div className={classes.container_up}>
            <Header/>
            <Navbar/>
            <div className={classes.content}>
                <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> } />
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Setting} />
            </div>
          </div>
      </div>
  )
}

export default Container_up;
