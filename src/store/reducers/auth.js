import * as ACTION from '../actions';

const initialState = {
    userCredential: null,
    triedToLogin: 0
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ACTION.USER_LOGGED_IN:{
            return {
                userCredential: action.payload,
                triedToLogin: 0
            }
        }
        case ACTION.USER_FAILED_TO_LOG_IN:{
            return {
                userCredential: null,
                triedToLogin: 1
            }
        }
        default:{
            return {...state};
        }
    }
}

export default reducer;