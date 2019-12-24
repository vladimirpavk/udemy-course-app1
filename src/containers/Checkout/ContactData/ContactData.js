import React, { Component } from 'react';

import classes from './ContactData.module.css';
import { appendToMemberExpression } from '@babel/types';

class ContactData extends Component{
    nameInput;

    constructor(props){
        super(props);

        this.state={
            name: '',
            email: '',
            address: {
                street: '',
                postalCode: ''
            }
        };
    }

    onFormSubmittedHandler = (event)=>{
        event.preventDefault();
        console.log(this.state);
        //this.props.history.push('/');
        console.log(this.props);
    }

    onNameChanged = (event)=>{
        this.setState({
            name: event.target.value
        });
    }

    onEmailChanged = (event)=>{
        this.setState({
            email: event.target.value
        });
    }

    onStreetChanged = (event)=>{
        console.log('onStreetChanged...');        
    }

    onPostalCodeChanged = (event)=>{
        this.setState({
            address:{
                postalCode: event.target.value
            }
        })
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h1>Contact Data</h1>
                <form onSubmit={this.onFormSubmittedHandler}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={this.onNameChanged}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Your email"
                        onChange={this.onEmailChanged}
                    />
                    <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        onChange={this.onStreetChanged}
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal code"
                        onChange={this.onPostalCodeChanged}
                    />
                    <button type="submit">ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData;