import React from 'react';
import classes from './SideDrawer.module.css';

import Backdrop from '../../Modal/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems' ;

const SideDrawer = (props)=>{

    let displayStyle = [classes.SideDrawer, classes.Close];

    if(props.show){
        displayStyle = [classes.SideDrawer, classes.Open]
    }       

    console.log(displayStyle);

    return(        
            props.show ? 
                <div>
                    <Backdrop
                        className={classes.Backdrop}
                        show={props.show}
                        unclicked={()=>{props.backDropClicked()}}
                    />
                    <div className={displayStyle.join(' ')}>                    
                        <h3>Logo</h3>
                        <nav>
                            <NavigationItems />
                        </nav>
                    </div>
                </div>              
            :
            null        
    );
}

export default SideDrawer;