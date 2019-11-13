import React from 'react';

import Aux from '../Hoc/Aux';
import BurgerIngridient from './BurgerIngridients/BurgerIngridient';
import classes from './Burger.module.css';

const Burger = (props)=>{
    //console.log(props.ingridients);
    let burgerIngridients = [];
    for(let ingridientName in props.ingridients){
        for(let i=0; i<props.ingridients[ingridientName]; i++){
            burgerIngridients.push(<BurgerIngridient key={Math.random()} type={ingridientName}/>)
        }
    }
    console.log(burgerIngridients);
    if(burgerIngridients.length === 0){
        console.log('Empty ingridients');
        burgerIngridients=<p>Please start adding ingridients...</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />                        
            {burgerIngridients}            
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

export default Burger;