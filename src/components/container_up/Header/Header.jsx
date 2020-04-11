import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return  (
        <header className={classes.header}>
            <img src='https://avatars.mds.yandex.net/get-pdb/1779763/5396d3b5-fa6e-433f-9d0d-146f54875ad0/s1200' alt='logo'/>
            <div className={classes.logBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;