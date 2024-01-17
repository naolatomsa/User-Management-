import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from "./login";
import View from './Activity';
import Gule from './userpage';
import Naol from './adminDashbord';
import SetAcount from './setacount';
import AdminProfile from './adminProfile';
import Edit from './edituser';

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
    path: "/adminpro",
    element: <AdminProfile />,
  }
  
]);
function App() {
  return (


      <>
    <RouterProvider router={router} />
       
      </>
        
   
  );
}

export default App;
