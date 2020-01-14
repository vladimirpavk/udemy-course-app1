import * as ACTION from '../actions';

const initialState = {
    userCredential: null,
    triedToLogin: 0,
    authorizing: false
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ACTION.USER_LOGGED_IN:{
            return {
                ...state,
                userCredential: action.payload,
                triedToLogin: 0
            }
        }
        case ACTION.USER_FAILED_TO_LOG_IN:{
            return {
                ...state,
                userCredential: null,
                triedToLogin: 1
            }
        }
        case ACTION.START_AUTHORIZING:{
            return {
                ...state,
                triedToLogin: 0,
                authorizing: true
            }
        }
        case ACTION.STOP_AUTHORIZING:{
            return {
                ...state,
                authorizing: false
            }
        }
        default:{
            return {...state};
        }
    }
}

export default reducer;