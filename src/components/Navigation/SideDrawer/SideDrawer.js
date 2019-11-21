import React from 'react';
import classes from './SideDrawer.module.css';

import NavigationItems from '../NavigationItems/NavigationItems' ;

const SideDrawer = ()=>{
    return(
        <div className={classes.SideDrawer}>
            <h3>Logo</h3>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer;