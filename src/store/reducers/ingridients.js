import * as ACTION from '../actions';
import INGRIDIENT_PRICES from './prices';

const initialState ={
    ingridients: {
        "meat": 0,
        "salad": 0,
        "bacon": 0,
        "cheese": 0
    },
    ingridientList : [],
    totalPrice: 4,
    isOrderable: false
}

const checkIfOrderAble = (ingridients)=>{
    let qty = 0;
    Object.keys(ingridients).forEach(
        (key)=>{
            qty += ingridients[key];
        }
    );        
  
    if(qty === 0) return false;
    else return true;
}      

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(ACTION.INCREASE_INGRIDIENT):{

            const newIngridients = {
                ...state.ingridients
            };
            newIngridients[action.payload] = state.ingridients[action.payload] + 1;          

            const newPrice = state.totalPrice + INGRIDIENT_PRICES[action.payload];                

            return {
                ingridients: newIngridients,
                totalPrice: newPrice,
                isOrderable: checkIfOrderAble(newIngridients),
                ingridientList: state.ingridientList.concat(action.payload)
            };
        }
        case(ACTION.DECREASE_INGRIDIENT):{
            const newState = {
                ...state.ingridients
            };

            if(newState[action.payload] === 0) return{
                ingridients: newState,
                totalPrice: 0,
                isOrderable: checkIfOrderAble(state.ingridients)
            }                

            newState[action.payload] = state.ingridients[action.payload] - 1;                    

            const newPrice = state.totalPrice - INGRIDIENT_PRICES[action.payload];

            let newIngridientList = [];
            const indexOfIngridient = state.ingridientList.indexOf(action.payload);
            if(indexOfIngridient !== -1){
                //exists in a list
                newIngridientList = [...state.ingridientList.splice(indexOfIngridient)];
            }
            
            return {
                ingridients: newState,
                totalPrice: newPrice,
                isOrderable: checkIfOrderAble(newState),
                ingridientList: newIngridientList
            };
        }
        default:
            return state;
    }        
}

export default reducer;