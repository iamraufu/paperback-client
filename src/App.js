import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { createContext, useState }  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home'
import Orders from './components/Orders/Orders'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Dashboard from './components/Dashboard/Dashboard';
import Checkout from './components/Checkout/Checkout';
import AddBook from './components/AddBook/AddBook';
// import EditBooks from './components/EditBooks/EditBooks';

export const UserContext = createContext();


const App = () => {
  const [loggedInUser,setLoggedInUser]  = useState({});

  return (

      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

    <Router>

      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>

        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>

        <PrivateRoute path="/addbook">
          <AddBook />
        </PrivateRoute>

        <PrivateRoute path="/checkout/:id">
          <Checkout />
        </PrivateRoute>


        <Route path="/login">
          <Login />
        </Route>
        
        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

    </Router>
      </UserContext.Provider>
  );
};

export default App;