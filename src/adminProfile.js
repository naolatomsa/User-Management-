import React from 'react';
import './login.css';
import './edituser.css';
import TopBar from './Topbar';
// import View from './Activity';
import Gule from './userpage';
function AdminProfile(){
    return(
        <div class="edituser">
        
        <div className='tolbar1'><TopBar /></div>
        <Gule />
        <div className='form-container edittwo'>
        <form className='form editform' action='#'>
        <h1 className='htwo'>Edit Profile</h1>
        <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>

            <div className='input2'>
            <input type='password' placeholder='confirm password' required/>
            </div>
            <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>

            <div className='input2'>
            <input type='password' placeholder='confirm password' required/>
            </div>
            <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>
            <div className='input6'>
            <button>save</button>
            </div>
        </form>
        {/* <View /> */}
        </div>
        </div>
    );
}
export default AdminProfile;