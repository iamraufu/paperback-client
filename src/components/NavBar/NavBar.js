import './NavBar.css'
import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
      // eslint-disable-next-line
      const [loggedInUser,setLoggedInUser]  = useState({});
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">

                  <Link to="/" className="link"><img src="https://i.ibb.co/Gc1Brjh/logo.png" style={{ maxWidth: '30%' }} className="d-inline-block align-top" alt="PaperBack Exchange logo" /></Link>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                              <Nav className="mr-auto"></Nav>

                              <Nav>
                                    <Link to="/home" className="link">Home</Link>
                                    <Link to="/orders" className="link">Orders</Link>
                                    <Link to="/admin" className="link">Admin</Link>
                                    {!loggedInUser && <Link to="/login" className="link">Login</Link>}
            
                              </Nav>
                              
                        </Navbar.Collapse>
                  </Navbar>
            </div>
      );
};

export default NavBar;