import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './components/Auth/Auth';

const App = (props)=>
{  
  let routes = (
    <Switch>
      <Route path='/' exact component={BurgerBuilder} />
      <Route path='/checkout' component={Checkout} />
      <Redirect to='/'/>
    </Switch>  
  );

  if(!props.auth){
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to='/auth'/>
      </Switch>
    )
  }

  return (
    <div className="App">
      {routes}
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    auth: state.auth.userCredential ? true : false
  }
}

export default connect(mapStateToProps, null)(App);
