import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Footer = () => {
      return (
            <MDBFooter color="unique-color" className="font-small pt-4 mt-4">
                  <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                              <MDBCol md="6">
                                    <h5 className="title">PaperBack Exchange</h5>
                                    <p>
                                          Buy New, Old Book and Exchange One
                                          <br/>
                                          Make a Bibliophile Friend 
                                          <br/>
                                          Read More Books and Win Exciting Gift from PaperBack Team.
                                    </p>
                              </MDBCol>

                              <MDBCol md="6">
                              <h5 className="title">Quick Links</h5>
                                    <ul>
                                          <li className="list-unstyled">
                                                <Link to="/home" className="link">Home</Link>
                                          </li>
                                          <li className="list-unstyled">
                                                <Link to="/orders" className="link">Orders</Link>
                                          </li>
                                          <li className="list-unstyled">
                                                <Link to="/admin" className="link">Admin</Link>
                                          </li>
                                          
                                    </ul>
                              </MDBCol>
                        </MDBRow>
                  </MDBContainer>

                  <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                              &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/iamraufu"> Raufu Prezens </a>
                        </MDBContainer>
                  </div>
            </MDBFooter>
      );
};

export default Footer;