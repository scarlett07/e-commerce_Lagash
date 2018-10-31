import React, { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

//Components
import Product from './../Components/Product';

class ShoppingCartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            order: []
        }

        this.upDateOrder = this.upDateOrder.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);
    }

    upDateOrder(item, price, quantity, image) {
        const ordered = [{ item: item, price: price, quantity: quantity, image: image }];
        this.setState({
            order: this.state.order.concat(ordered)
        })
    }

    removeFromOrder(item) {
        this.setState((currentState) => {
            return {
                order: currentState.order.filter((item) => item.item !== item)
            }
        })
    }

    componentWillMount() {
        //Consulta de API, con una pagina que resuelve el error de cross-origin read blocking
        fetch('https://cors-anywhere.herokuapp.com/https://maxmvpstorage.blob.core.windows.net/drops/products-demo.json')

            .then((response) => { return response.json() })
            .then((response) => this.setState({ items: response }))
            .catch(function (err) {
                console.error(err);
            })
    }

    render() {
        reactLocalStorage.setObject('order', { 'order': this.state.order });
        return (
            <div>
                <Product Products={this.state.items}
                    upDateOrder={this.upDateOrder}
                    removeFromOrder={this.removeFromOrder}
                    order={this.state.order}
                />
            </div>
        );
    } //END Render
} //END ShoppingCartPage

export default ShoppingCartPage;