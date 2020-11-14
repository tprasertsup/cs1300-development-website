import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Collapse } from 'react-bootstrap';


export default function StoreNavbar(props) {
    const [sort, setSort] = useState('');
    let sortTitle = `Sort by ${sort}`
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
                        <NavDropdown title={sortTitle} id="basic-nav-dropdown">
                            <NavDropdown.Item
                                onClick={(e) => {
                                    props.onSortSubmit("category", e)
                                    setSort("")
                                }}
                            >
                                Select
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={(e) => {
                                    props.onSortSubmit("alphabet", e)
                                    setSort("Alphabet")
                                }}
                            >
                                Alphabet
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={(e) => {
                                    props.onSortSubmit("price asc", e)
                                    setSort("Price (Ascending)")
                                }}
                            >
                                Price (Ascending)
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={(e) => {
                                    props.onSortSubmit("price desc", e)
                                    setSort("Price (Descending)")
                                }}
                            >
                                Price (Descending)
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant="warning" onClick={(e) => props.onViewCart(e)}
                        aria-controls="example-collapse-text"
                        aria-expanded={props.viewCart}>View Cart</Button>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );

}