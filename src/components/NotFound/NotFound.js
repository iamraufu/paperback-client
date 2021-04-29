import React from 'react';
import { Image } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
      return (
            <div className="not-found">
                  <a href="http://localhost:3000"><Image src="https://i.ibb.co/Gc1Brjh/logo.png" fluid /></a>
                  <h1>404 Not Found!</h1>
            </div>
      );
};

export default NotFound;