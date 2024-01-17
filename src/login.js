import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './login.css';

function Login() {
  const [action, setAction] = useState('Login');
  const [isSignUp, setIsSignUp] = useState(false);
  const [Username, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()
  const switchForm = () => {
    setIsSignUp(!isSignUp);
    setAction(isSignUp ? 'Login' : 'Sign Up');
    setUserName("");
    setPassword("");
    
    
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
      navigate('')
    }

  };

  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      // Input field validation
      if (!Username.trim() || !Password.trim() || !Email.trim() || !ConfirmPassword.trim()) {
        console.error('All fields are required.');
        return;
      }
      if (Password !== ConfirmPassword) {
        console.error('Passwords do not match.');
        return;
      }
  
      try {
        const response = await axios.post('http://192.168.0.111:8000/api/signup/', {
          Username,Email, Password, ConfirmPassword
        });
  
        console.log('Form data sent successfully!', response.data);
  
        // Navigate to another page after successful submission
        navigate('/setaccount')
      } catch (error) {
        console.error('Failed to send form data', error);
      }

    };

  // const handleSignup = () => {
    
  //   if(Username && Password &&Email && ConfirmPassword){
  //     if(Password===ConfirmPassword)
  //     {
  //       navigate('/setaccount')

  //     }
  //     else{
  //       alert('your Password doest much')
  //     }
      

  //   }
  //   else{
  //     navigate('')
  //   }
    
  // };
  return (
    <div className='all'>
      <div className='wow'>
          <div className='Naol'>
          <div id="styleec" />
          <div id="poly1" />
          
          <div className='midlep'>
          <div id="stylerec" />
          
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
        <form className='form' onSubmit={isSignUp ? handleSignup : handleLogin}>
          <h1 className='h2'>{action}</h1>
          {isSignUp && (
            <div className='input3'>
              <input type='email' placeholder='Email' required value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
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
              <input type='password' placeholder='Confirm Password' required value={ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
            </div>
          )}
          
          {isSignUp ? (<button onClick={handleSignup}>{action}</button>):
           (<button type='submit' onClick={handleLogin}>{action}</button>)}
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
