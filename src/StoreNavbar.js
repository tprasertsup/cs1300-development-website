import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import * as Constants from './constants';


/**
 * Navigation bar at the top of the website. Includes
 * 1. Store's name
 * 2. Dropdown of how to filter by category
 * 3. Dropdown of how to filter by price
 * 4. Dropdown of how to sort
 * 5. View/Hide Cart button
 * 
 *  Props include  viewCart, filterCategory, filterPrice, and sort
 * 
 *  Clicking on filter by category will trigger handleFilterCategorySubmit in Store
 *  Clicking on filter by price will trigger handleFilterPriceSubmit in Store
 *  Clicking on sort will trigger handleSortSubmit in Store
 *  Clicking on View/Hide Cart button will trigger handleViewCart in Store
 */
export default function StoreNavbar(props) {

    let cartButtonText = props.viewCart ? 'Hide Cart' : 'View Cart'

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="custom-navbar-brand">Fake Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <NavDropdown title="Filter by Category" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                active={props.filterCategory === null}
                                onClick={(e) => props.onFilterCategorySubmit(null, e)}
                            >
                                All
                                </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterCategory === Constants.CATEGORY_MEN_CLOTHING}
                                onClick={(e) => props.onFilterCategorySubmit(Constants.CATEGORY_MEN_CLOTHING, e)}
                            >
                                Men clothing
                                </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterCategory === Constants.CATEGORY_WOMEN_CLOTHING}
                                onClick={(e) => props.onFilterCategorySubmit(Constants.CATEGORY_WOMEN_CLOTHING, e)}
                            >
                                Women clothing
                                </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterCategory === Constants.CATEGORY_JEWELERY}
                                onClick={(e) => props.onFilterCategorySubmit(Constants.CATEGORY_JEWELERY, e)}
                            >
                                Jewelery
                                </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterCategory === Constants.CATEGORY_ELECTRONICS}
                                onClick={(e) => props.onFilterCategorySubmit(Constants.CATEGORY_ELECTRONICS, e)}
                            >
                                Electronics
                                </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Filter by Price" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                active={props.filterPrice === null}
                                onClick={(e) => props.onFilterPriceSubmit(null, e)}
                            >
                                All
                                </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterPrice === Constants.PRICE_LOW}
                                onClick={(e) => props.onFilterPriceSubmit(Constants.PRICE_LOW, e)}
                            >
                                Less than $10
                                </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterPrice === Constants.PRICE_MID}
                                onClick={(e) => props.onFilterPriceSubmit(Constants.PRICE_MID, e)}
                            >
                                $10 - $100
                                    </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.filterPrice === Constants.PRICE_HIGH}
                                onClick={(e) => props.onFilterPriceSubmit(Constants.PRICE_HIGH, e)}
                            >
                                More than $100
                                </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sort" id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item
                                active={props.sort === null}
                                onClick={(e) => props.onSortSubmit(null, e)}>
                                Select
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.sort === Constants.SORT_ALPHABET}
                                onClick={(e) => props.onSortSubmit(Constants.SORT_ALPHABET, e)}
                            >
                                Alphabet
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.sort === Constants.SORT_PRICE_ASC}
                                onClick={(e) => props.onSortSubmit(Constants.SORT_PRICE_ASC, e)}
                            >
                                Price (Ascending)
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                active={props.sort === Constants.SORT_PRICE_DESC}
                                onClick={(e) => props.onSortSubmit(Constants.SORT_PRICE_DESC, e)}
                            >
                                Price (Descending)
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant="warning" onClick={(e) => props.onViewCart(e)}
                        aria-controls="example-collapse-text"
                        aria-expanded={props.viewCart}>{cartButtonText}</Button>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );

}