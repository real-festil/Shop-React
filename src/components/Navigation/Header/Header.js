import React from 'react';
import classes from './Header.module.css';
import cartImage from '../../../assets/images/shopping-cart.png';

const header = ( props ) => {
    return (
        <div className={classes.Header}>
            <h1>Just an e-shop Project!</h1>
            <div className={classes.Cart} onClick={props.cartClicked}>
                <img src={cartImage} alt='' />
            </div>
        </div>
    )
}

export default header;