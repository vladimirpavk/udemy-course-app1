import React from 'react';

import Backdrop from './Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = (props)=>{
    return( 
        <div>
            <Backdrop
                show={props.show}
                unclicked={props.unclicked}
            />                       
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >            
                {props.children}
            </div>
        </div>
    );
}

export default Modal;