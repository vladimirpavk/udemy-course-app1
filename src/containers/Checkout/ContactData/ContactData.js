import React, { Component } from 'react';

import classes from './ContactData.module.css';

class ContactData extends Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            email: '',
            address: {
                street: '',
                postalCode : ''
            }
        };
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h1>Contact Data</h1>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postalCode" placeholder="Postal code" />
                    <button type="submit">ORDER</button>
                </form>
            </div>
        )
    }
}

export default ContactData;