import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return  (
        <header className={classes.header}>
            <img src='https://avatars.mds.yandex.net/get-pdb/1779763/5396d3b5-fa6e-433f-9d0d-146f54875ad0/s1200' alt='logo'/>
        </header>
    )
}

export default Header;