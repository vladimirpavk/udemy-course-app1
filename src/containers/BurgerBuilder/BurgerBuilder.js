import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    constructor(props){
        super(props);

        //state i.e.
        this.state = {
            ingridients: {
                "meat": 0,
                "salad": 0,
                "bacon": 0,
                "cheese": 0
            }     
        };
    }

    render() {
        return (
            <div>
                <div>Burger</div>
                <Burger ingridients={this.state.ingridients}/>
                <div>Build controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;