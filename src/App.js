import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from "./login";
import Naol from './button.js';

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
]);
function App() {
  return (


      <>
    <RouterProvider router={router} />
       
      </>
        
   
  );
}

export default App;
