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
      <div className="card__text" >
      <h2>Naol Atomsa</h2>
        <p style={{color: 'black'}}>Ethiopia</p>
        <p style={{color: 'black'}}>Addis Ababa</p>
      </div>
    </div>
    <ul className="card2" style={{ borderBottom: '1px solid #ccc', width:'50%',marginBottom:'0', marginLeft:'100px' }}>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/name.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>Admin</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/active.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>Active</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/men.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>Male</span>
      </li>
    </ul>
    <ul className="card3" style={{width:'350px', marginTop:'0',marginLeft:'100px'}} >
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/email.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>naolatomsa4@gmail.com</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/phone.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>+251943134213</span>
      </li>
    </ul>
  </div>
  </>
    );
}

export default UserDashboard;