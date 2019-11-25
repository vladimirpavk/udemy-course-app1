import React, { Component } from 'react';
import classes from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    constructor(props){
        super(props);

        this.state={
            layout:{
                isSideDrawerOpened: false
            }
        };
    }   
    
    backDropUnclicked = ()=>{
        console.log('backDropUnclicked');

        this.setState(
            {
                layout:{
                    isSideDrawerOpened: false
                }
            }            
        );
    }

    openSideDrawer = ()=>{
        console.log('openSideDrawer()');

        this.setState(
            {
                layout:{
                    isSideDrawerOpened: true
                }
            }            
        );
    }

    render(){
        return (
            <div>
                <Toolbar 
                    menuClicked={this.openSideDrawer} />        

                <SideDrawer
                    show={this.state.layout.isSideDrawerOpened}
                    backDropClicked={this.backDropUnclicked}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );               
    }   
};

export default Layout;