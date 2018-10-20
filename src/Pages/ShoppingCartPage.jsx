import React from 'react';
import { Card, Button, CardTitle, Row, CardImg } from 'reactstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import Product from './../Components/Product';

export default class Example extends React.Component {

    render() {

        let order = reactLocalStorage.getObject('order');
        console.log(order);

        return (
            <div>
                {order.order.map(item =>
                    <Card body className='col-md-4'>
                        <CardImg top width="100%" src={item.image} alt="Card image cap" height="200px" />
                        <CardTitle>{item.item}<p className="price_info">${item.price}</p></CardTitle>
                        <Row>
                            <Button
                                onClick={() => this.handleRemoveDish(item.item)} color="secondary" className="col-md-offset-2 col-md-2">-
                             </Button>
                            <p className="col-md-2" placeholder="0">{item.quantity}
                            </p>
                            <Button color="info" className="col-md-2"
                                onClick={() => this.handleOrder(item.item, item.price)}>+
                             </Button>
                        </Row>
                    </Card>
                )}
                <thead>
                    <tr>
                        {/* <th>{}Productos</th>
                        <th>Total {order.order.map(item=>item.price*item.quantity)}</th>
                        <th>{}</th> */}
                        <th><Button color="info"
                            >Comprar Productos
                            </Button>
                        </th>
                    </tr>
                </thead>
            </div>
        );
    }
}