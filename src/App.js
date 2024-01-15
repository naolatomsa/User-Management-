import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from "./login";
import View from './Activity';
import Gule from './userpage';
import Naol from './adminDashbord';

// import './App.css';

const router = createBrowserRouter([
  {
    path: "/login",
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
