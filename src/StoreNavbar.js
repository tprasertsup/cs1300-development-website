import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Collapse } from 'react-bootstrap';
import Cart from './Cart.js';

export default function StoreNavbar(props) {
    const [open, setopen] = useState(false);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="custom-navbar-brand" href="#home">Fake Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <NavDropdown title="Filter" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={(e) => props.onFilterSubmit(null, e)}>All</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onFilterSubmit("men clothing", e)}>Men clothing</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onFilterSubmit("women clothing", e)}>Women clothing</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onFilterSubmit("jewelery", e)}>Jewelery</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onFilterSubmit("electronics", e)}>Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sort" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={(e) => props.onSortSubmit("category", e)}>Category</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onSortSubmit("alphabet", e)}>Alphabet</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onSortSubmit("price asc", e)}>Price Ascending</NavDropdown.Item>
                            <NavDropdown.Item onClick={(e) => props.onSortSubmit("price desc", e)}>Price Descending</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant="warning" onClick={() => setopen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>View Cart</Button>
                </Navbar.Collapse>
            </Navbar>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Cart />
                </div>
            </Collapse>
        </div >
    );

}