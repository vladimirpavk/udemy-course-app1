import React from 'react';
import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = ()=>{
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div>LOGO</div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;