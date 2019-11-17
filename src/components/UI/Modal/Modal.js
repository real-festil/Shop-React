import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => {

    let totalPrice = 0;
    totalPrice = props.children.map((item) => {
        return totalPrice + parseFloat(item.price);
    });


    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <h1>Your order</h1>
                {props.children.map((item) => (
                    <p className={classes.Product}>
                        {item.name + " : " + item.price + "$"}
                        <div onClick={() => props.deleteProduct(item.id)}>Delete</div>
                    </p>
                ))}
                <h3>Total Price: {totalPrice.reduce((x, y) => x+y, 0)}$</h3>
            </div>
        </Aux>
    );
};

export default modal;