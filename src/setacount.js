import React from 'react';
import './login.css';

function SetAcount() {
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
            Set up your profile. Let’s know a little bit about you. This won’t take long.
            </p>
          </div>
        </div>
      </div>
      <div className='form-container'>
        <form className='form' action='#'>
          <h1 className='h2'>Finish Account Setup</h1>
          <div className='input3'>
            <input type='text' placeholder='name' required/>
            </div>
    
          <div className='input1' style={{width:'300px', border: 'solid 1px #38A899 '}} >
          <label for="gender">Gender:<br></br></label>
        <select id="gender" name="gender">
            <option value="male" >Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
          </div>
          <div className='input2'>
          <input type="tel" name="phone" placeholder="Enter your phone number" required/>
          </div>
   
            <div className='input4'>
              <input type='date' placeholder='Date of birth' required/>
            </div>
            <div className='input4'>
              <input type='' placeholder='location' required/>
            </div>
            <div className='input4'>
              <input type='file' placeholder='upload picture' required/>
            </div>
            <div className='input5'>
              <button>Clear</button>
              <button>save change</button>
            </div>
          <p style={{ color: 'black' }}>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SetAcount;
