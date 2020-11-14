import React, { useState } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';

export default function CartItem(props) {

    const [amount, setAmount] = useState(props.amount)

    const handleRemoveOne = (item, e) => {
        props.onRemoveItem(item, e)
        setAmount(amount - 1)
    }

    const handleAddOne = (item, e) => {
        props.onAddItem(item, e)
        setAmount(amount + 1)

    }

    return (
        <Row className="pb-2 cart-item">
            <Col></Col>
            <Col xs={5} className="text-left">{props.item.title}</Col>
            <Col className="text-right">${props.item.price}</Col>
            <Col className="text-left">
                <Pagination size="sm">
                    <Pagination.Item onClick={(e) => handleRemoveOne(props.item, e)}>-</Pagination.Item>
                    <Pagination.Item disabled>{props.amount}</Pagination.Item>
                    <Pagination.Item onClick={(e) => handleAddOne(props.item, e)}>+</Pagination.Item>
                </Pagination>
            </Col>
            <Col></Col>
        </Row>
    );

}