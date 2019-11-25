import React from 'react';
import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props)=>{
    return (
        <header className={classes.Toolbar}>
            <div onClick={()=>{props.menuClicked()}}>MENU</div>
            <div>LOGO</div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;