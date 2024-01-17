import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from "./login";
import View from './Activity';
import Gule from './userpage';
import Naol from './adminDashbord';
import SetAcount from './setacount';
import AdminProfile from './adminProfile';
import Edit from './edituser';
import AdminAdduser from './AdminAdduser';
import UserDashboard from './userDashboard';
import UserUpdateProfile from './userUpdateProfile';
import ProfileOfAdmin from './profileOfAdmin';
import ForgetPass from './forgetPass';
import Verificationpage1 from './verificationpage1';
import Verificationpage3 from './verificationpage3';
import Changepassword from './changepassword';

// import './App.css';

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },

  {
    path: "/Admin Dashbord",
    element: <Naol />,
  },
  {
    path: "/userhome",
    element: <Gule />,
  },
  {
    path: "/viewactivity",
    element: <View />,
  },
  {
    path: "/setaccount",
    element: <SetAcount />,
  },
  {
    path: "/edituser",
    element: <Edit />,
  },
  {
    path: "/adminpage",
    element: <AdminProfile />,
  },
  {
    path: "/adduser",
    element: <AdminAdduser />,
  },
  {
    path: "/userpro",
    element: <UserDashboard />,
  },
  {
    path: "/updatepro",
    element: <UserUpdateProfile />,
  },
  
  {
    path: "/adminpro",
    element: <ProfileOfAdmin />,
  },
  {
    path: "/forget",
    element: <ForgetPass />,
  },
  {
    path: "/forget/v1",
    element: <Verificationpage1 />,
  },
  {
    path: "/forget/v1/changepassword",
    element: <Changepassword  />,
  },
  {
    path: "/v3",
    element: <Verificationpage3  />,
  },
  
  
  
  
]);
function App() {
  return (


      <>
    <RouterProvider router={router} />
       
      </>
        
   
  );
}

export default App;
