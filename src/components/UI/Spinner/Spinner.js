import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => (
    <div>
        <div className={classes.Backdrop}></div>
        <div className={classes.Loader}>Loading...</div>
    </div>    
);

export default spinner;