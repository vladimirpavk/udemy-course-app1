import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Checkout.module.css';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

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

    componentDidMount(){
        const queryString = this.props.location.search.slice(1, this.props.location.search.legth);
        const queryArray = queryString.split('&');
        //console.log('queryArray - ', queryArray);
        const newIngridients = {};

        queryArray.forEach(element => {
            const valuePair = element.split('=');
            //console.log('element  -', element, 'valuePair - ', valuePair);
            newIngridients[valuePair[0]] = valuePair[1]; 
        });                   
        //console.log(newIngridients);
        this.setState({
            ingridients: newIngridients
        });
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
            <Route path='/checkout/contact-data' component={ContactData} />
        );        
    }
}   

export default Checkout;