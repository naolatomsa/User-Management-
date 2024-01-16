import React from "react";
import './topbar.css';
import IMG from "./img";

function TopBar(){
    return(

        <>
     <div className="user-bar">
      <p className="ums">ums</p>
      <p className="topbarname" style={{color:'white'}}>Naol Atomsa</p>
      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
        size={'20px'}/>
      <div className="logout">
        

        <button>logout</button>
          
      </div>
      
    </div>
        </>
    );
}
export default TopBar;