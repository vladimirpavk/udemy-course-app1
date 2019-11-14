import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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

    increaseIngridient = (ingridient)=>{  
        this.setState(
            (oldState)=>{
                const newState = {
                    ...oldState.ingridients
                };

                newState[ingridient] = oldState.ingridients[ingridient] + 1;

                console.log(newState);

                return {
                    ingridients : newState
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

                console.log(newState[ingridient]);

                if(newState[ingridient] === 0)
                {
                    console.log(newState[ingridient]);
                    return null;
                }

                newState[ingridient] = oldState.ingridients[ingridient] - 1;                            

                return {
                    ingridients: newState
                };
            }
        )
    }

    render() {
        return (
            <div>
                <div>Burger</div>
                <Burger ingridients={this.state.ingridients}/>
                {/* <div>Build controls</div> */}
                <BuildControls ingridientsQtys={this.state.ingridients} incrementRef={(ingridient)=>this.increaseIngridient(ingridient)} decrementRef={this.decreaseIngridient}/>
            </div>
        );
    }
}

export default BurgerBuilder;