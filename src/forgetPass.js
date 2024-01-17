import React from 'react'
import {useNavigate} from 'react-router-dom';
const ForgetPass = () => {
  const navigate = useNavigate()
  const handleReset = () => {
    navigate('./v1')
  }
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
            <form className='form'  onSubmit={handleReset}>
              <h1 style={{color:'#36AE8B'}}>FORGOT PASSWORD</h1>
              <div className='input1'>
                <p style={{color:'black'}}>Enter your email for the verification process, we will send 4 digits code to your email.</p>
              </div>
              <div className='input2'>
                <input type='email' placeholder='Email' required />
              </div>
              <button type='submit' style={{marginTop: '30px'}}>Continue</button>
            </form>
          </div>
        </div>
      );
}

export default ForgetPass;