import React, { useState } from 'react';
import { Button, Container, Row, Col, Collapse } from 'react-bootstrap';

export default function Cart(props) {
    const [total, settotal] = useState(0);
    return (
        <div  >
            <Collapse in={props.viewCart}>
                <div className="bg-secondary cart p-3" id="example-collapse-text">
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
                </div>
            </Collapse>
        </div>);
}