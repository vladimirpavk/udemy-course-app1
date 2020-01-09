import * as firebase from 'firebase';
import 'firebase/auth';

export const INCREASE_INGRIDIENT = 'INCREASE INGRIDIENT';
export const DECREASE_INGRIDIENT = 'DECREASE INGRIDIENT';
//export const AUTH_USER = 'AUTHORIZE USER';
export const USER_LOGGED_IN = 'USER LOGGED IN';
export const USER_FAILED_TO_LOG_IN = 'USER FAILED TO LOGIN';


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

const userLoggedIn = (userCredentials)=>{
    return{
        type: USER_LOGGED_IN,
        payload: userCredentials
    }
}

const userFailedToLogIn = ()=>{
    return{
        type: USER_FAILED_TO_LOG_IN        
    }
}

export const autorizeUser = (username, password)=>{
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(username, password).then(
            (userCredentials)=>{
                //console.log('Sign In Successfull...', userCredential);
              /*   userCredential.user.getIdToken().then(
                    (token)=>{
                        console.log(token);
                    }
                ).catch(
                    (error)=>{
                        console.log(error);
                    }
                ) */
                dispatch(userLoggedIn(userCredentials));
            }
        ).catch(
            (error)=>{
                //console.log('Sign In unsuccessfull...');                
                dispatch(userFailedToLogIn());
            }            
        );
    }
}