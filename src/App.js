import React from 'react';

import * as Redux from 'redux';
import reducer from './store/reducers/ingridients';

import * as ReactRedux from 'react-redux';

import ReduxThunk from 'redux-thunk';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './components/Auth/Auth';

const actionLogger = (store)=>{
  return (next)=>{
    return (action)=>{
      console.log('[Middleware] ', action.type, action.payload);
      next(action);
      console.log('[Middleware]', store.getState());
    }
  }
}

const store=Redux.createStore(reducer, Redux.applyMiddleware(actionLogger, ReduxThunk));

function App() { 
  return (    
    <ReactRedux.Provider store={store}>
      <div className="App">          
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/' exact component={BurgerBuilder} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/auth' component={Auth}/>
            </Switch>         
          </Layout>  
        </BrowserRouter>         
      </div> 
    </ReactRedux.Provider>
  );
}

export default App;
