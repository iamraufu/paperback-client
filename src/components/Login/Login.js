import './Login.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './loginManger';
import NavBar from '../NavBar/NavBar';


const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: true,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }


  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  return (
    <div>

      <NavBar/>

      <div className="login">

      <h1 style={{textAlign:'center',color:'#226089',margin:'2rem',borderBottom:'none'}}>To Do So, You Need To Log In</h1>
        <div onClick={googleSignIn} className="social-button-container">
          
         
          {
            user.isSignedIn ?
              <button className='social-buttons' style={{ width: '50%' }}>Continue with Google</button> :
              <button className='social-buttons' style={{ width: '50%' }} onClick={googleSignIn}>Continue with Google</button>
          }
          
        </div>
      </div>
      </div>
      );
};

export default Login;