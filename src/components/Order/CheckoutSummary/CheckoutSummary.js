import React from 'react';
import Burger from '../../Burger/Burger';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props)=>(
    <div className={classes.CheckoutSummary}>
        <h1>Uživajte u prijatnom obroku</h1>        
        <Burger ingridients={props.ingridients} />
    </div>
);

export default CheckoutSummary;