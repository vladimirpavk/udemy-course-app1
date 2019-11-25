import React from 'react';
import classes from './SideDrawer.module.css';

import Backdrop from '../../Modal/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems' ;

const SideDrawer = (props)=>{
    return(        
            props.show ? 
                <div>
                    <Backdrop
                        show={props.show}
                        unclicked={()=>{props.backDropClicked()}}
                    />
                    <div className={classes.SideDrawer}>                    
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