import React from 'react';
import classes from './PopUp.module.css';

const popup = (props) => (
    <div className={classes.Popup} style={{
        opacity: props.show ? 1 : 0,
        transform: props.show ? 'translateY(0)' : 'translateY(100vh)'
    }}>Added to your cart!</div>
);

export default popup;