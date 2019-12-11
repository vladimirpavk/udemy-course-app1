import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
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
  );
}

export default App;
