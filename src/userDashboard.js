import React from 'react'
import TopBar from './Topbar';
import IMG from './img';
import {useNavigate} from 'react-router-dom';
import './edituser.css'

const UserDashboard = () => {
    const navigate = useNavigate()
    const handleUserDashboard=()=>{
        navigate('/updatepro')
    };
  return (
    <>
    <TopBar />
    <div className="card auserboard">
  
    <div className="card1">
      {/* <img
        src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"
        alt="User image"
        className="card__image"
      /> */}
      <div class="wrapper userprofile">
            <a class="third after" style={{fontSize:'17px'}}>My profile</a>
            <a onClick={handleUserDashboard} className='third after' style={{fontSize:'17px'}}>Update profile</a>
         </div>

      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
      size={'100px'}/>
      <div className="card__text">
        <h2></h2>
        <p style={{color: 'black'}}></p>
        {/* <p style={{color: 'black'}}>Whashington Dc</p> */}
      </div>
    </div>
    <ul className="card2">
      <li>
        <span></span>
      </li>
      <li>
        <span></span>
      </li>
      <li>
        <span></span>
      </li>
    </ul>
    <ul className="card3">
      <li>
        <span></span>
      </li>
      <li>
        <span></span>
      </li>
    </ul>
  </div>
  </>
    );
}

export default UserDashboard;