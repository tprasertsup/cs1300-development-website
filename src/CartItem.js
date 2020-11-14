import React, { useState } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';

export default function Cart(props) {

    const [amount, setAmount] = cloneDeep(props.amount)

    const handleRemoveOne = (e) => {
        setAmount(amount - 1)
    }

    const handleAddOne = (e) => {
        setAmount(amount + 1)

    }

    return (
        <Row className="pb-2 cart-item">
            <Col></Col>
            <Col xs={5} className="text-left">{props.item.title}</Col>
            <Col className="text-right">${props.item.price}</Col>
            <Col className="text-left">
                <Pagination size="sm">
                    <Pagination.Item onClick={(e) => handleRemoveOne(e)}>-</Pagination.Item>
                    <Pagination.Item disabled>{props.amount}</Pagination.Item>
                    <Pagination.Item onClick={(e) => handleRemoveOne(e)}>+</Pagination.Item>
                </Pagination>
            </Col>
            <Col></Col>
        </Row>
    );

}