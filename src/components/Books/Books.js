import './Books.css'
// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Books = (props) => {
      // eslint-disable-next-line
      const { id, book, author, price, image } = props.book;
      const history = useHistory();

      const handleClick = id => {
            history.push(`/checkout/${id}`)
      }
      
      return (
            <div className='book-card'>
                  <Container>
                        <Row>
                              <Col style={{ padding: '0' }}>
                                    <Card className='card'>
                                          <Card.Img className='card-image' variant="top" src={image} />
                                          <Card.Body>
                                                <Card.Title>{book}</Card.Title>
                                                <Card.Text>{author}
                                                      <br />
                                                      <h2 style={{ color: '#eac100', fontWeight: 'bold' }}>${price}</h2>
                                                </Card.Text>
                                                <Button onClick={()=>handleClick(id)} style={{ fontWeight: 'bold' }} variant="info">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></Button>
                                          </Card.Body>
                                    </Card>
                              </Col>
                        </Row>
                  </Container>

            </div>
      );
};

export default Books;