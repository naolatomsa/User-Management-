import React from "react";
import './topbar.css';
import IMG from "./img";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function TopBar() {
  const navigate = useNavigate();
  const access = localStorage.getItem('access');
  const userRole = localStorage.getItem('userRole');
  console.log(access);

  // Logout
 
  const handleLogout = () => {
    try{
    localStorage.removeItem('access');
    localStorage.removeItem('userRole');

    navigate('/');
    }catch(error){
      console.log(error)
    }
  };
    return(

        <>
     <div className="user-bar">
      <p className="ums">ums</p>
      <p className="topbarname" style={{color:'white'}}>Naol Atomsa</p>
      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
        size={'20px'}/>
      <div className="logout">
        

        <button onSubmit={handleLogout}>logout</button>
          
      </div>
      
    </div>
        </>
    );
}
export default TopBar;