import React from 'react';

import * as Redux from 'redux';
import reducer from './store/reducers/ingridients';

import * as ReactRedux from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Checkout from './containers/Checkout/Checkout';

const store=Redux.createStore(reducer);

function App() { 
  return (    
    <ReactRedux.Provider store={store}>
      <div className="App">          
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/' exact component={BurgerBuilder} />
              <Route path='/checkout' component={Checkout} />
            </Switch>         
          </Layout>  
        </BrowserRouter>         
      </div> 
    </ReactRedux.Provider>
  );
}

export default App;
