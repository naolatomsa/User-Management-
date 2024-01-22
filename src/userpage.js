import React from 'react';
import './userpage.css';
import IMG from './img';
// import TopBar from './Topbar';
function Gule(props){
  let name = props.name;
  let location = props.location;
  let role = props.role;
  let status = props.status;
  let gender = props.gender;
  let email = props.email;
  let phone = props.phone;
  let size = props.size;

    return(
        < div className='userpage'>
        {/* <TopBar /> */}
        <img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px', marginTop:'20px' }} alt='Back' />

  <div className="card">
 
    <div className="card1">

      {/* <img
        src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"
        alt="User image"
        className="card__image"
      /> */}
      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
      size={'100px'}/>
      <div className="card__text">
        <h2>{name}</h2>
        <p style={{color: 'black'}}>{location}</p>
        {/* <p style={{color: 'black'}}>Whashington Dc</p> */}
      </div>
    </div>
    <ul className="card2">
      <li>
        <span>{role}</span>
      </li>
      <li>
        <span>{status}</span>
      </li>
      <li>
        <span>{gender}</span>
      </li>
    </ul>
    <ul className="card3">
      <li>
        <span>{email}</span>
      </li>
      <li>
        <span>{phone}</span>
      </li>
    </ul>
  </div>
</div>

    );
}
export default Gule;