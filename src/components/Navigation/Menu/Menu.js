import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Menu.module.css';
import {withRouter} from 'react-router-dom'

const menu = ( props ) => {
    return (
        <div className={classes.Wrapper}>
            <Backdrop show={props.show} clicked={props.menuClosed}/>
            <div
                className={classes.Sandwich}
                style={{
                    display : props.show ? 'none' : 'block'
                }}
                >
                <div onClick={props.clicked}></div>
                <div onClick={props.clicked}></div>
                <div onClick={props.clicked}></div>
            </div>
            <div className={classes.Menu}
                style={{
                    transform: props.show ? 'translateX(0)' : 'translateX(-100vh)',
                    opacity: props.show ? '1' : '0',
                    position: props.show ? 'fixed' : 'fixed'
                }}>
                <ul>
                    <li onClick={() => props.history.push('/')}>Home Page</li>
                </ul>
                <ul>
                    <li onClick={() => props.history.push('/category1')}>Category 1</li>
                    <li onClick={() => props.history.push('/category2')}>Category 2</li>
                </ul>
            </div>
        </div>
        );
}

export default withRouter(menu);