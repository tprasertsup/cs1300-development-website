import React, { useState } from 'react';
import { Button, Container, Row, Col, Collapse, Modal } from 'react-bootstrap';
import CartItem from './CartItem.js'
import { removeDuplicate, countItems, getTotalPrice, roundNumber } from './utils';

/**
 * Cart is a collapse of the navigation bar (at the top of the website). 
 * Cart includes the following
 * 1. list of items the user puts inside the cart
 * 2. subtotal items and prices
 * 3. Checkout button
 * 
 *  Props include cart and viewCart
 * 
 *  Clicking on Checkout, a modal with checkout confirmation will pop up
 */
export default function Cart(props) {

    /**
     * uniqueCart contains only unique items in cart
     */
    const uniqueCart = removeDuplicate(props.cart)

    /** boolean of whether the checkout confirmation modal is shown */
    const [show, setShow] = useState(false);

    /** when a close button of the checkout confirmation modal is clicked */
    const handleClose = () => setShow(false);

    /** when the checkout button is clicked */
    const handleShow = () => setShow(true);

    /** total price of all items in the cart */
    const total = roundNumber(getTotalPrice(props.cart));

    return (
        <div  >
            <Collapse in={props.viewCart}>
                <div className="bg-secondary cart p-3" id="example-collapse-text">
                    <Container>
                        {uniqueCart && uniqueCart.map(item =>
                            <CartItem
                                item={item}
                                amount={countItems(props.cart, item)}
                                onAddItem={props.onAddItem}
                                onRemoveItem={props.onRemoveItem}
                                onDelete={props.onDelete} />)}
                        <Row className="align-middle mt-4">
                            <Col className="text-right">
                                <h4 className="mb-0">Subtotal ({props.cart.length} items): ${total}</h4>
                            </Col>
                            <Col className="text-left">
                                <Button variant="info" className="shadow" onClick={handleShow}>Checkout</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Collapse>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Checkout total: <b>${total}</b></p>
                    <p>Thank you for shopping with us!</p>
                </Modal.Body>
            </Modal>
        </div >);
}