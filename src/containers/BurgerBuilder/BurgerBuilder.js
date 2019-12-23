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
        console.log('orderClicked');

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
        /* console.log('onOrderModalClicked...');

        alert('You continued...');
        console.log(this.props); */        
        const queryParams = [];        
        Object.entries(this.state.ingridients).forEach(
             ([key, value])=>{
                queryParams.push(encodeURIComponent(key)+'='+encodeURIComponent(value));
        });
        const queryString = queryParams.join('&');
        //console.log(queryString);

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
                <div>Burger</div>
                <h2>Vertigo City</h2>
                <h3>PAVLE</h3>
                <p>Total price ${this.props.totalPrice.toFixed(2)}</p>
                <Burger />
                <BuildControls
                    orderDisabled={!this.props.isOrderable} 
                    orderClicked={this.orderClicked}/>           
              {/*   <Modal
                    show={this.state.orderInProgress}
                    unclicked={this.orderUnClicked}
                >
                    <OrderSummary
                        ingridients={this.state.ingridients}
                        totalPrice={this.state.totalPrice}
                        confirmed={this.orderModalClicked}
                        canceled={this.orderUnClicked}/>
                </Modal> */}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        totalPrice: state.totalPrice,
        isOrderable: state.isOrderable
    }
}

export default connect(mapStateToProps)(BurgerBuilder);