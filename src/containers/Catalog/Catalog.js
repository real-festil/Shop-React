import React, { Component } from 'react';
import classes from './Catalog.module.css';
import Aux from '../../hoc/Aux';
import Menu from '../../components/Navigation/Menu/Menu';
import Header from '../../components/Navigation/Header/Header';
import Slider from '../../components/Navigation/Slider/Slider';
import Product from '../../components/Content/Product/Product';
import Footer from '../../components/Navigation/Footer/Footer';
import axios from '../../axios';
import Modal from '../../components/UI/Modal/Modal';
import Popup from '../../components/UI/Pop-up/PopUp';
import {Route} from 'react-router-dom';

let cartArr = [];

class Catalog extends Component {

    state = {
        products: [],
        category1: [],
        category2: [],
        menuShow: false,
        modalShow: false,
        popupShow: false,
        cart: []
      }

    componentDidMount () {
        console.log(window.location.href)
        axios.get('https://react-edd41.firebaseio.com/category1.json')
            .then(response => {
                const fetchedProducts = [];
                for ( let key in response.data ) {
                    fetchedProducts.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({products: fetchedProducts});
            });
        axios.get('https://react-edd41.firebaseio.com/category2.json')
            .then(response => {
                const fetchedProducts = [];
                for ( let key in response.data ) {
                    fetchedProducts.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({category1: fetchedProducts});
            });
        axios.get('https://react-edd41.firebaseio.com/category3.json')
            .then(response => {
                const fetchedProducts = [];
                for ( let key in response.data ) {
                    fetchedProducts.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({category3: fetchedProducts});
            });
    }

    menuShowingHandler = () => {
        this.setState({menuShow: true});
      }

    menuClosedHandler = () => {
        this.setState({menuShow: false});
    }

    addToCartHandler = ( price, name ) => {
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
        const currentProduct = {
            name: name,
            price: price,
            id: id
        }
        cartArr.push(currentProduct);
        this.setState({
            cart: cartArr
        });
        this.setState({
            popupShow: true
        });
        setTimeout(() => {
            this.setState({
                popupShow: false
            });
        }, 1000)
    }

    cartClickedHandler = () => {
        this.setState({modalShow: true});
    }

    modalClosedHandler = () => {
        this.setState({modalShow: false});
    }

    deleteProductHandler = ( product ) => {
        let updatedProducts = [
            ...this.state.cart
        ];
        let updatedCartArr = [
            ...cartArr
        ];
        updatedCartArr = updatedCartArr.filter((item) => item.id !== product);
        updatedProducts = updatedProducts.filter((item) => item.id !== product);
        cartArr = updatedCartArr;
        this.setState({
            cart: updatedProducts
        });
    }

    render () {
        return (
            <Aux>
                <Menu show={this.state.menuShow} clicked={this.menuShowingHandler} menuClosed={this.menuClosedHandler}/>
                <Header
                    cartClicked={this.cartClickedHandler} />
                <Slider/>
                <h1 style={{'textAlign' : 'center', 'borderBottom' : '2px solid #71c9ce'}}>Best sellers!</h1>
                <Route path='/' exact render={(props) => (
                    <div className={classes.ProductsWrapper}>
                    {this.state.products.map(product => (
                        <Product
                            key={product.id}
                            imgSrc={product.image}
                            name={product.id}
                            price={product.price}
                            desc={product.desc}
                            buttonClicked={() => this.addToCartHandler(product.price, product.id)}/>
                    ))}
                </div>
                )}/>
                <Route path='/category1' exact render={(props) => (
                    <div className={classes.ProductsWrapper}>
                    {this.state.category1.map(product => (
                        <Product
                            key={product.id}
                            imgSrc={product.image}
                            name={product.id}
                            price={product.price}
                            desc={product.desc}
                            buttonClicked={() => this.addToCartHandler(product.price, product.id)}/>
                    ))}
                </div>
                )}/>
                <Route path='/category2' exact render={(props) => (
                    <div className={classes.ProductsWrapper}>
                    {this.state.category3.map(product => (
                        <Product
                            key={product.id}
                            imgSrc={product.image}
                            name={product.id}
                            price={product.price}
                            desc={product.desc}
                            buttonClicked={() => this.addToCartHandler(product.price, product.id)}/>
                    ))}
                </div>
                )}/>
                <Popup show={this.state.popupShow}/>
                <Modal
                    show={this.state.modalShow}
                    modalClosed={this.modalClosedHandler}
                    deleteProduct={(item) => this.deleteProductHandler(item)}
                    children={this.state.cart}/>
                <Footer/>
            </Aux>
        )
    }
}

export default Catalog;