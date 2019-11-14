import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props)=>
    (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <label className={classes.LabelQty}>{props.qty}</label>
            <button className={classes.More} onClick={props.clickPlus}>+</button>
            <button className={classes.Less} onClick={props.clickMinus}>-</button>
        </div>
    )


export default BuildControl;