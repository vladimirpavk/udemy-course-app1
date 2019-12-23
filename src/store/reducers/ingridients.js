import * as ACTION from '../actions';
import INGRIDIENT_PRICES from './prices';

const initialState ={  
    ingridientList : [],
    totalPrice: 4,
    isOrderable: false,
    ingridients: {
        "meat": 0,
        "salad": 0,
        "bacon": 0,
        "cheese": 0
    },
}    

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(ACTION.INCREASE_INGRIDIENT):{               

            const newPrice = state.totalPrice + INGRIDIENT_PRICES[action.payload];                
            const newIngridientList = state.ingridientList.concat(action.payload);

            const newIngridients = { ...state.ingridients };
            newIngridients[action.payload] = state.ingridients[action.payload] + 1;
            
            return {               
                totalPrice: newPrice,
                isOrderable: true,
                ingridientList: newIngridientList,
                ingridients: newIngridients
            };
        }

        case(ACTION.DECREASE_INGRIDIENT):{        

            if(state.ingridientList.indexOf(action.payload) === -1) return { ...state };                             

            const newPrice = state.totalPrice - INGRIDIENT_PRICES[action.payload];

            const newIngridients = { ...state.ingridients };            
            newIngridients[action.payload] = state.ingridients[action.payload] - 1;

            let newIngridientList = [];
            
            const tempIngridientList = [...state.ingridientList.reverse()];
            const indexOfIngridient = tempIngridientList.indexOf(action.payload);

            tempIngridientList.splice(indexOfIngridient, 1);
            newIngridientList = [...tempIngridientList.reverse()];
            
            return {                
                totalPrice: newPrice,
                isOrderable: state.ingridientList.length > 0 ? true : false,
                ingridientList: newIngridientList,
                ingridients: newIngridients
            };
        }
        default:
            return state;
    }        
}

export default reducer;