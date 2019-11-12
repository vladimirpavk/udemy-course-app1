import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render() {
        return (
            <div>
                <div>Burger</div>
                <Burger />
                <div>Build controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;