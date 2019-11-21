import React from 'react';
import classes from './NavigationItems.module.css';

const NavigationItems = ()=>(
    <ul className={classes.NavigationItems}>
        <li><a href="/">BurgerBuilder</a></li>
        <li><a href="/">Checkout</a></li>
    </ul>
)

export default NavigationItems;