import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Cart() {
    const [total, settotal] = useState(0);
    return (
        <div className="bg-secondary cart p-3">
            <Container>
                <Row>
                    <Col className="text-right">
                        <h4>Total: ${total}</h4>
                    </Col>
                    <Col className="text-left">
                        <Button variant="primary">Checkout</Button>
                    </Col>
                </Row>
            </Container>
        </div>);
}