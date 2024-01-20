import React from 'react';
import './login.css';
import './edituser.css';
import TopBar from './Topbar';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
// import View from './Activity';
import Gule from './userpage';
function AdminProfile(){


        const [userInfo, setUserInfo] = useState(null);
        
        // const userRole = localStorage.getItem('userRole')
      
        useEffect(() => {
          // Retrieve the token from storage (localStorage, cookies, etc.)
          const access = localStorage.getItem('access')
      
          if (access) {
            // Decode the token to get user information
            const decodedUser = jwt.decode(access);
      
            // Set the user information in state
            setUserInfo(decodedUser);
          }
        }, []);

        // return (
        //     <div>
        //       {userInfo ? (
        //         <div>
        //           <h2>Welcome, {userInfo.username}!</h2>
        //           <p>Email: {userInfo.email}</p>
        //           {/* Other user information */}
        //         </div>
        //       ) : (
        //         <p>Loading...</p>
        //       )}
        //     </div>
        //   );
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