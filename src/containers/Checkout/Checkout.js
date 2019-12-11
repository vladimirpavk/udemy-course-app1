import React, { Component } from 'react';

import classes from './Checkout.module.css';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            ingridients: {
                "meat": 1,
                "salad": 1,
                "bacon": 1,
                "cheese": 1
            },
        };

    }
    
    render(){
        return(
            <div className={classes.Checkout}>
                <CheckoutSummary ingridients={this.state.ingridients} />
                <div className={classes.dugmici}>
                    <button
                        className={classes.cancel}
                        onClick={()=>this.props.history.goBack()}>Cancel</button> 
                    <button
                        className={classes.continue}
                        onClick={()=>this.props.history.replace('/checkout/contact-data')}>Continue</button>
                </div>                
            </div>
        );        
    }
}   

export default Checkout;