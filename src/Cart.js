import React, { useState } from 'react';
import { Button, Container, Row, Col, Collapse } from 'react-bootstrap';
import CartItem from './CartItem.js';
import cloneDeep from 'lodash/cloneDeep';

export default function Cart(props) {

    // remove duplicate items in the cart
    let reducedCart = props.cart.slice() // slice makes copy of array before sorting it
        .sort(function (a, b) {
            return a.id > b.id;
        })
        .reduce(function (a, b) {
            if (a.length === 0 || a.slice(-1)[0].id !== b.id) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
            return a;
        }, []); // this empty array becomes the starting value for a

    console.log(reducedCart);


    const handleUpdateAmount = (e, itemId, amount) => {

    }

    return (
        <div  >
            <Collapse in={props.viewCart}>
                <div className="bg-secondary cart p-3" id="example-collapse-text">
                    <Container>
                        {reducedCart && reducedCart.map((item) =>
                            <CartItem item={item} amount={1} />
                        )}
                        <Row>
                            <Col className="text-right">
                                <h4>Total: $0</h4>
                            </Col>
                            <Col className="text-left">
                                <Button variant="info" className="shadow">Checkout</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Collapse>
        </div>);
}