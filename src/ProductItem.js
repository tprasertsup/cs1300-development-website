import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

/**
 * Card with information of each item available for sale
 * 
 *  Props include product, which contains the following properties: title, category, description, and price
 * 
 *  Clicking on Add to Cart button will trigger handleAddToCart in Store
 */
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
                                <Button variant="success" onClick={(e) => props.onAddToCart(props.product, e)}>Add to cart</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div >

    );
}