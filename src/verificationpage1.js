import React from 'react'

const Verificationpage1 = () => {
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
            <form className='form'>
              <h1 style={{color:'#36AE8B'}}>VERIFICATION</h1>
              <div className='input1'>
                <p style={{color:'black'}}>Enter your 4 digits code that you received on your email.</p>
              </div>
              <div className='input2'>
                <input style={{width:'57px' ,marginRight:'5px'}}type='text' required />
                <input style={{width:'57px' ,marginRight:'5px'}}type='text' required />
                <input style={{width:'57px' ,marginRight:'5px'}}type='text'required />
                <input style={{width:'57px' ,marginRight:'5px'}}type='text'required />
              </div>
              <p style={{color:'#F2451C'}}>0:30</p>
              <button>VERIFY</button>
              <div className='input1'>
                <p style={{color:'black'}}>If you didn’t receive a code! <a style={{color:'#38A899'}}>Resend</a></p>
              </div>
              
             
            </form>
          </div>
        </div>
      );
}

export default Verificationpage1;