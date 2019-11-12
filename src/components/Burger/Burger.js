import React from 'react';

import BurgerIngridient from './BurgerIngridients/BurgerIngridient';
import classes from './Burger.module.css';

const Burger = ()=>{
    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />            
            <BurgerIngridient type="meat" />
            <BurgerIngridient type="cheese" />
            <BurgerIngridient type="bacon" />
            <BurgerIngridient type="salad" />
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

export default Burger;