import React from 'react';
import classes from './ContainerUp.module.css';
import {Route} from 'react-router-dom';
import Header from "./Header/Header";
import Profile from './dynamic_window/Profile/Profile';
import News from "./dynamic_window/News/News";
import Music from "./dynamic_window/Music/Music";
import Setting from "./dynamic_window/Setting/Setting";
import DialogsContainer from "./dynamic_window/Dialogs/DialogsContainer";
import NavbarContainer from "./Navbar/NavbarContainer";
import UsersContainer from "./dynamic_window/Users/UsersContainer";

const ContainerUp = (props) => {

    return (
      <div className='container'>
          <div className={classes.container_up}>
            <Header/>
            <NavbarContainer />
            <div className={classes.content}>
                <Route path='/profile' render={ () => <Profile /> } />
                <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Setting} />
                <Route path='/users'
                       render={ () => <UsersContainer /> } />
            </div>
          </div>
      </div>
  )
}

export default ContainerUp;
