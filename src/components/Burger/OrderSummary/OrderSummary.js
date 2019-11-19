import React from 'react';

import classes from './OrderSummary.module.css';

const OrderSummary = (props)=>{

    const ingridientList = (
        Object.keys(props.ingridients).map(
            (igKey)=><li key={Math.random()}>{igKey} - {props.ingridients[igKey]}</li>
        )
    );
            
    return(
        <div className={classes.OrderSummary}>            
            <h3>Your order</h3>
            <p>Your order contains following ingridients :</p>
            <ul>
                {ingridientList}
            </ul>
            <h3>Total price : ${props.totalPrice}</h3>        
            <button>Confirm order</button>   
        </div>       
    )
}

export default OrderSummary;