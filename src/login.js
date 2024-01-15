import React from 'react';
import { useState } from 'react';
import {useNavigate ,Link} from 'react-router-dom';
import './login.css';

function Login() {
  const [action, setAction] = useState('Login');
  const [isSignUp, setIsSignUp] = useState(false);
  const [Username, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  const navigate = useNavigate()
  const switchForm = () => {
    setIsSignUp(!isSignUp);
    setAction(isSignUp ? 'Login' : 'Sign Up');
    
  };

  const handleLogin = () => {
    // Perform your login logic here

    // After successful login, navigate to the home page
    // history.push('/Naol');

    if(Username && Password){
      
      console.log(Username, Password);
      navigate('/Admin Dashbord')

    }
    else{
      navigate('/login')
    }

  };
  const handleSignup = () => {
    // Perform your login logic here

    // After successful login, navigate to the home page
    // history.push('/Naol');
    navigate('/finish')
  };
  return (
    <div className='all'>
      <div className='wow'>
          <div className='Naol'>
          <div id="styleec" />
          <div id="stylerec" />
          <div id="poly1" />
          <div className='midlep'>
            <h1 className='h1'>WELCOME!</h1>
            <p className='fp'>
              From chaos to clarity. Simplify user management and say goodbye to spreadsheets.
            </p>
            <p className='sp'>Your time</p>
            <p className='thp'>your data</p>
            <p className='fitp'>your peace of mind!</p>
          </div>
        </div>
      </div>
      <div className='form-container'>
        <form className='form' action='#'>
          <h1 className='h2'>{action}</h1>
          {isSignUp && (
            <div className='input3'>
              <input type='email' placeholder='Email' required/>
            </div>
          )
          }
          <div className='input1'>
            <input type='text' placeholder='Username' required value={Username} onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          <div className='input2'>
            <input type='password' placeholder='Password' required value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          {isSignUp && (
            <div className='input4'>
              <input type='password' placeholder='Confirm Password' required/>
            </div>
          )}
          
          {isSignUp ? (<button onClick={handleSignup}>{action}</button>):
           (<button onClick={handleLogin}>{action}</button>)}
          <a href='#'>{isSignUp ? '' : 'Forgot your password?'}</a>
          {/* <a onClick={switchForm}> {isSignUp ? 'Login' : 'Sign Up'}</a> */}
          <p style={{ color: 'black' }}>
            {isSignUp ? 'Already have an account?' : 'New user?'}
            <a onClick={switchForm}> {isSignUp ? 'Login' : 'Sign Up'}</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
