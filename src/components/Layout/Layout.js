import React from 'react';
import classes from './Layout.module.css';

const Layout = (props)=>(
    <div>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);

export default Layout;