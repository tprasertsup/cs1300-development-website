import React from 'react';
import { Row, Col, Pagination, Button } from 'react-bootstrap';

/**
 * CartItem contains the following information of each item in the cart. 
 *  1. Item's title
 *  2. Item's price per unit
 *  3. The quanity of the item in the cart with - and + sign
 *      Notice that - is disabled if the current quantity is 1
 *  4. 'Delete' button, which will delete all units of the certain item
 * 
 *  Props include item (with properties of title, price) and amount
 * 
 *  Clicking on - will trigger handleRemoveFromCart in Store
 *  Clicking on + will trigger handleAddToCart in Store
 *  Clicking on Delete button will trigger handleRemoveAllFromCart in Store
 */
export default function CartItem(props) {

    return (
        <Row className="pb-2 cart-item">
            <Col xs={1}></Col>
            <Col xs={5} className="text-left">{props.item.title}</Col>
            <Col className="text-right">${props.item.price}</Col>
            <Col>
                <Pagination size="sm" className="font-weight-bold">
                    <Pagination.Item
                        onClick={(e) => props.onRemoveItem(props.item, e)}
                        disabled={props.amount === 1}>
                        -</Pagination.Item>
                    <Pagination.Item disabled>{props.amount}</Pagination.Item>
                    <Pagination.Item onClick={(e) => props.onAddItem(props.item, e)}>+</Pagination.Item>
                </Pagination>
            </Col>
            <Col className="text-left">
                <Button variant="danger" size="sm" className="text-left"
                    onClick={(e) => props.onDelete(props.item, e)}>Delete</Button>
            </Col>
            <Col xs={1}></Col>
        </Row>
    );

}