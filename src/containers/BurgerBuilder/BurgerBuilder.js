import React, { Component } from 'react';

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
    isOrderable = false;

    constructor(props){
        super(props);

        //state i.e.
        this.state = {
            ingridients: {
                "meat": 0,
                "salad": 0,
                "bacon": 0,
                "cheese": 0
            },
            totalPrice : 4,
            orderInProgress: false
        };
    }

    checkIfOrderAble = (ingridients)=>{
        let qty = 0;
        Object.keys(ingridients).forEach(
            (key)=>{
                qty += ingridients[key];
            }
        );        

        if(qty === 0) this.isOrderable = false;
        else this.isOrderable = true;        

        /* console.log('qty : ', qty, 'isOrderable', this.isOrderable); */
    }

    increaseIngridient = (ingridient)=>{  
        this.setState(
            (oldState)=>{
                const newState = {
                    ...oldState.ingridients
                };

                newState[ingridient] = oldState.ingridients[ingridient] + 1;

                this.checkIfOrderAble(newState);

                const newPrice = oldState.totalPrice + INGRIDIENT_PRICES[ingridient];                

                return {
                    ingridients: newState,
                    totalPrice: newPrice
                };
            }
        );
    }

    decreaseIngridient = (ingridient)=>{
        this.setState(
            (oldState)=>{
                const newState = {
                    ...oldState.ingridients
                };

                if(newState[ingridient] === 0) return null;                

                newState[ingridient] = oldState.ingridients[ingridient] - 1;       
                
                this.checkIfOrderAble(newState);

                const newPrice = oldState.totalPrice - INGRIDIENT_PRICES[ingridient];

                return {
                    ingridients: newState,
                    totalPrice: newPrice
                };
            }
        )
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
                <p>Total price ${this.state.totalPrice.toFixed(2)}</p>
                <Burger ingridients={this.state.ingridients}/>                
                <BuildControls
                    ingridientsQtys={this.state.ingridients}
                    incrementRef={(ingridient)=>this.increaseIngridient(ingridient)}
                    decrementRef={this.decreaseIngridient}
                    orderDisabled={!this.isOrderable} 
                    orderClicked={this.orderClicked}/>
                <Modal
                    show={this.state.orderInProgress}
                    unclicked={this.orderUnClicked}
                >
                    <OrderSummary
                        ingridients={this.state.ingridients}
                        totalPrice={this.state.totalPrice}
                        confirmed={this.orderModalClicked}
                        canceled={this.orderUnClicked}/>
                </Modal>
            </div>
        );
    }
}

export default BurgerBuilder;