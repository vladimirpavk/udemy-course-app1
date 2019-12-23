import React from 'react';
import { connect } from 'react-redux';

import Aux from '../Hoc/Aux';
import BurgerIngridient from './BurgerIngridients/BurgerIngridient';
import classes from './Burger.module.css';

const Burger = (props)=>{
    //console.log(props.ingridients);
    let burgerIngridients = [];
    props.ingridients.forEach(ingridient => {
        burgerIngridients.push(<BurgerIngridient key={Math.random()} type={ingridient}/>)
    });
  
    if(burgerIngridients.length === 0){       
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

const mapStateToProps = (state)=>{
    return{        
        ingridients: state.ingridientList
    }    
}

export default connect(mapStateToProps)(Burger);