import React, { Component } from 'react';
import { Button, Table, Media } from 'reactstrap';

//Tabla de productos 
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.Products = props.Products;
        this.order = props.order;
        this.handleOrder = this.handleOrder.bind(this);
    }

    handleOrder(item, price, image) {

        let finds = this.props.order.find(product => product.item === item)
        if (finds === undefined) {
            this.props.upDateOrder(item, price, 1, image)
        } else {
            let newArray = this.props.order;
            let newElement = newArray.find((dish, index) => {
                return dish.item === item;
            })

            console.log(newElement.quantity += 1)
            console.log(newArray)

        }
    } //END handleOrder

    render() {
        //  console.log(this.props.Products.products)
        if (this.props.Products.products) {
            return (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.Products.products.map(item =>
                                <tr>
                                    <td><Media height="100px" width="100px" src={item.image} alt="CardImage" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><Button onClick={() => this.handleOrder(item.title, item.price, item.image)}>Agregar</Button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            )
        } else {
            return (
                <div>
                    Estamos teniendo Problemas con nuestros servidores, por favor intenta mas tarde :)
                </div>
            )
        }
    }; //END Render
}; //END Product
