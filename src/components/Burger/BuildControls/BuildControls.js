import React from 'react';
import { connect } from 'react-redux';
import * as ACTION from '../../../store/actions';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const countElement = (array, refElement)=>{
    const newArray = array.filter(
                        (element)=>{
                            return element === refElement;
                        }
                    );
    return newArray.length;
}

const BuildControls = (props)=>
    (
        <div className={classes.BuildControls}>
            <BuildControl
                label="Pljeskavica"
                qty={props.ingridientsQtys['meat']}
                clickPlus={()=>{props.incrementRef('meat')}}
                clickMinus={()=>{props.decrementRef('meat')}} />

            <BuildControl
                label="Sir"
                qty={props.ingridientsQtys['cheese']}
                clickPlus={()=>{props.incrementRef('cheese')}}
                clickMinus={()=>{props.decrementRef('cheese')}} />
                
            <BuildControl
                label="Salata"
                qty={props.ingridientsQtys['salad']}
                clickPlus={()=>{props.incrementRef('salad')}}
                clickMinus={()=>{props.decrementRef('salad')}} />

            <BuildControl
                label="Slanina"
                qty={props.ingridientsQtys['bacon']}
                clickPlus={()=>{props.incrementRef('bacon')}}
                clickMinus={()=>{props.decrementRef('bacon')}} />

            <button
                className={classes.OrderButton}
                disabled={props.orderDisabled}
                onClick={()=>{props.orderClicked()}}
            >
            Order</button>
        </div>
    );

const mapStateToProps = (state)=>{
    return {
        ingridientsQtys: state.ingridients.ingridients,
        orderDisabled: !state.ingridients.isOrderable
    }
}

const mapDispatchToState = (dispatch)=>{
    return{
        incrementRef: (ingridient)=>dispatch(ACTION.increaseIngridient(ingridient)),
        decrementRef: (ingridient)=>dispatch(ACTION.decreaseIngridient(ingridient))        
    }
}

export default connect(mapStateToProps, mapDispatchToState)(BuildControls);
