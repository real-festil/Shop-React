import React from 'react';
import classes from './Product.module.css';

const product = ( props ) => (
    <div className={classes.Product}>
        <div>
            <img src={props.imgSrc} alt=''/>
        </div>
        <h3>{props.name}</h3>
        <h4>{props.desc}</h4>
        <button onClick={props.buttonClicked}>ADD {props.price}$</button>
    </div>
);

export default product;