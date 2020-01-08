import * as firebase from 'firebase';
import 'firebase/auth';

export const INCREASE_INGRIDIENT = 'INCREASE INGRIDIENT';
export const DECREASE_INGRIDIENT = 'DECREASE INGRIDIENT';
export const AUTH_USER = 'AUTHORIZE USER';

//action creators
export const increaseIngridient = (ingridient)=>{
    return {
        type: INCREASE_INGRIDIENT,
        payload: ingridient
    }
}

export const decreaseIngridient = (ingridient)=>{
    return{
        type: DECREASE_INGRIDIENT,
        payload: ingridient
    }
}

/* export const autorizeUser = (user, password)=>{
    return{
        type: AUTH_USER,
        payload: {
            username: user,
            password: password
        }
    }
} */

export const autorizeUser = (username, password)=>{
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(username, password).then(
            (data)=>{
                console.log('Sign In Successfull...', data);
            }
        ).catch(
            (error)=>{
                console.log('Sign In unsuccessfull...');                
            }            
        );
    }
}