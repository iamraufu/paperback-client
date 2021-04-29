import { Button } from 'bootstrap';
import React from 'react';
import { Carousel, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

const Header = () => {


      return (
            <div>
                  <Container >

                        <Row>
                              <Col>
                              <p style={{textAlign: 'center'}}>
                                    <h1 style={{ color: '#1f4287' }}>PaperBack Exchange</h1>                                    
                                    <h3 style={{ color: '#0b8457' }}>Online Book Service</h3>
                              </p>

                              {
                                    Carousel.length === 0 && <Button variant="primary" disabled>
                                    <Spinner
                                      as="span"
                                      animation="grow"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    />
                                    Loading...
                                  </Button>
                              }

                                    <Carousel fade>
                                          <Carousel.Item>
                                          <div className="container">
                                                <img
                                                      className="d-block w-100 img-fluid"
                                                      src="https://i.ibb.co/54z0jZr/1.jpg"
                                                      alt="First slide"
                                                      
                                                />
                                          </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                          <div className="container">
                                                <img
                                                      className="d-block w-100 img-fluid"
                                                      src="https://i.ibb.co/FJzg6Fc/2.jpg"
                                                      alt="Second slide"
                                                />

                                          </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                          <div className="container">
                                                <img
                                                      className="d-block w-100 img-fluid"
                                                      src="https://i.ibb.co/cgq0M5K/3.jpg"
                                                      alt="Third slide"
                                                />
                                          </div>

                                          </Carousel.Item>
                                    </Carousel>
                              </Col>
                        </Row>
                        <br />
                        <Form>
                              <Row>
                                    <Col>
                                          <Form.Control placeholder="Search Book" />
                                    </Col>

                              </Row>
                        </Form>
                  </Container>
            </div>
      );
};

export default Header;