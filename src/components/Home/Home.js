import './Home.css'
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Spinner } from 'react-bootstrap';

const Home = () => {
      // eslint-disable-next-line
      const [books, setBooks] = useState([])
      

      useEffect(() => {
            fetch('https://paperbackexchange.herokuapp.com/products')
                  .then(res => res.json())
                  .then(data => {
                        setBooks(data);
                  })
      }, [])
      return (
            <div>
                  <NavBar />

                  <Header />
                  <div className="books">
                        {
                              books.length === 0 &&
                              <div style={{ margin: 'auto' }}>
                                    <Spinner animation="border" />
                                    <h5>Crunching the latest data just for you. Hang Tight</h5>
                              </div>
                        }
                        {
                              books.map(book =>
                                    <Books book={book}></Books>
                                    )
                              }
                              
                  </div>
                  <Footer />
            </div>
      );
};

export default Home;