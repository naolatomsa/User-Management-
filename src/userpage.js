import React from 'react';
import './userpage.css';
import IMG from './img';
// import TopBar from './Topbar';
function Gule(){
    return(
        <>
        {/* <TopBar /> */}
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
        <h2>Alexandra Caulea</h2>
        <p style={{color: 'black'}}>United State Of America</p>
        <p style={{color: 'black'}}>Whashington Dc</p>
      </div>
    </div>
    <ul className="card2">
      <li>
        <span>posts</span>
      </li>
      <li>
        <span>followers</span>
      </li>
      <li>
        <span>following</span>
      </li>
    </ul>
    <ul className="card3">
      <li>
        <span>posts</span>
      </li>
      <li>
        <span>followers</span>
      </li>
      <li>
        <span>following</span>
      </li>
    </ul>
  </div>
</>

    );
}
export default Gule;