import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    "meat": 0.4,
    "salad": 0.1,
    "bacon": 0.3,
    "cheese": 0.2
};

class BurgerBuilder extends Component{   

    constructor(props){
        super(props);
        
        this.state = {
            orderInProgress: false
        };
    }
   
    orderClicked = ()=>{
        this.setState({
            orderInProgress: true
        });
    }

    orderUnClicked = ()=>{
        console.log('orderRaskliknut...');

        this.setState({
            orderInProgress: false
        });
    }

    orderModalClicked = ()=>{     
        const queryParams = [];        
        Object.entries(this.props.ingridients).forEach(
             ([key, value])=>{
                queryParams.push(encodeURIComponent(key)+'='+encodeURIComponent(value));
        });
        const queryString = queryParams.join('&');        

        this.props.history.push(
            {
                pathname: '/checkout',
                search: '?' + queryString
            });

        this.orderUnClicked();
    }

    render() {
        return (
            <div>
                <h1>Burger</h1>
                <h2>Vertigo City</h2>
                <h3>PAVLE</h3>
                <p>Total price ${this.props.totalPrice.toFixed(2)}</p>
                <Burger />
                <BuildControls
                    orderDisabled={!this.props.isOrderable} 
                    orderClicked={this.orderClicked}/>           
                <Modal
                    show={this.state.orderInProgress}
                    unclicked={this.orderUnClicked}>
                   <OrderSummary
                        confirmed={this.orderModalClicked}
                        canceled={this.orderUnClicked}/>
                </Modal> 
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        totalPrice: state.ingridients.totalPrice,
        isOrderable: state.isOrderable,
        ingridients: state.ingridients
    }
}

export default connect(mapStateToProps)(BurgerBuilder);