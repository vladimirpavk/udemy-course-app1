import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Layout from './components/Layout/Layout';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ingridientReducer from './store/reducers/ingridients';
import authReducer from './store/reducers/auth';

import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAweTNfP6HXxJItYeZ6R8jYeU4jk6Hwb1E",
    authDomain: "ionic4-udemy.firebaseapp.com",
    databaseURL: "https://ionic4-udemy.firebaseio.com",
    projectId: "ionic4-udemy",
    storageBucket: "ionic4-udemy.appspot.com",
    messagingSenderId: "704274670716",
    appId: "1:704274670716:web:4dc3212366406dc79f95f9"
}

firebase.initializeApp(firebaseConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
const actionLogger = (store)=>{
    return (next)=>{
      return (action)=>{
        console.log('[Middleware] ', action.type, action.payload);
        next(action);
        console.log('[Middleware]', store.getState());
      }
    }
  }

const store=Redux.createStore(
    Redux.combineReducers({
        ingridients: ingridientReducer,
        auth: authReducer
      }),
      composeEnhancers(
        Redux.applyMiddleware(actionLogger, ReduxThunk)
));

const reactComponent = (
    <ReactRedux.Provider store={store}>       
      <BrowserRouter>
        <Layout>
         <App />
        </Layout>  
      </BrowserRouter>            
  </ReactRedux.Provider>
);

ReactDOM.render(reactComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
