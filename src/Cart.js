import React, { useState } from 'react';
import { Button, Container, Row, Col, Collapse, Modal } from 'react-bootstrap';
import CartItem from './CartItem.js'
import { removeDuplicate, countItems } from './utils';

export default function Cart(props) {

    const uniqueCart = removeDuplicate(props.cart)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div  >
            <Collapse in={props.viewCart}>
                <div className="bg-secondary cart p-3" id="example-collapse-text">
                    <Container>
                        {uniqueCart && uniqueCart.map(item =>
                            <CartItem
                                item={item}
                                amount={countItems(props.cart, item.id)}
                                onAddItem={props.onAddItem}
                                onRemoveItem={props.onRemoveItem} />)}
                        <Row>
                            <Col className="text-right">
                                <h4>Total: ${props.total}</h4>
                            </Col>
                            <Col className="text-left">
                                <Button variant="primary" onClick={handleShow}>Checkout</Button>
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
                    <p>Checkout total: <b>${props.total}</b></p>
                    <p>Thank you for shopping with us!</p>
                </Modal.Body>
            </Modal>
        </div >);
}