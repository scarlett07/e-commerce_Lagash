import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Media
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './Header.css';


export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand className="header" href="/"><Media src="https://user-images.githubusercontent.com/12899162/47273852-84b81280-d561-11e8-9f87-71bb418e6016.png"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/"><i className="fa fa-user"></i></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/shoppingCart">Carrito</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    } //END render
} //END header