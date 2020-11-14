import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function ProductItem(props) {

    return (
        <div>
            <Card className="card">
                <Card.Img className="card-img-top" variant="top" src={props.product.image} />
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    <Card.Subtitle className="text-muted pt-1 pb-2">{props.product.category}</Card.Subtitle>
                    <Card.Text className="card-description">{props.product.description}</Card.Text>
                    <Container>
                        <Row>
                            <Col className="text-right"> <Card.Text className="h3">${props.product.price}</Card.Text></Col>
                            <Col className="text-left">
                                <Button variant="danger" onClick={(e) => props.onAddToCart(props.product, e)}>Add to cart</Button>
                            </Col>
                        </Row>
                    </Container>


                </Card.Body>
            </Card>
        </div >

    );
}