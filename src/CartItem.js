import React, { useState } from 'react';
import { Row, Col, Pagination, Button } from 'react-bootstrap';

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