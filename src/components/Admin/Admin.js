import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../NavBar/NavBar';

const Admin = () => {
      // eslint-disable-next-line
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                  <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Hello <span style={{ color: '#fc5185' }}>{loggedInUser.name}</span> , Welcome to Admin Panel!</h2>
                  {
                        books.map(book =>
                              <Dashboard book={book}></Dashboard>
                        )
                  }
            </div>
      );
};

export default Admin;