import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props)=>
    (
        <div className={classes.BuildControls}>
            <BuildControl
                label="Meat"
                qty={props.ingridientsQtys['meat']}
                clickPlus={()=>{props.incrementRef('meat')}}
                clickMinus={()=>{props.decrementRef('meat')}} />

            <BuildControl
                label="Cheese"
                qty={props.ingridientsQtys['cheese']}
                clickPlus={()=>{props.incrementRef('cheese')}}
                clickMinus={()=>{props.decrementRef('cheese')}} />
                
            <BuildControl
                label="Salad"
                qty={props.ingridientsQtys['salad']}
                clickPlus={()=>{props.incrementRef('salad')}}
                clickMinus={()=>{props.decrementRef('salad')}} />

            <BuildControl
                label="Bacon"
                qty={props.ingridientsQtys['bacon']}
                clickPlus={()=>{props.incrementRef('bacon')}}
                clickMinus={()=>{props.decrementRef('bacon')}} />
        </div>
    )


export default BuildControls;
