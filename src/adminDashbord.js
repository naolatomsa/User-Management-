import React, { useState } from 'react';
import { useEffect } from 'react';
import TopBar from './Topbar';
import axios from 'axios';
import './adminDashbord.css';
// import IMG from './img';

function Naol() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        // Make an HTTP GET request using Axios to your backend API endpoint
        const response = await axios.get('http://127.0.0.1:8000/api/user_list');

        // Access the data property of the response object
        const responseData = response.data;

        // Ensure responseData is an array before updating the state
        if (Array.isArray(responseData)) {
          setData(responseData);
        } else {
          console.error('Fetched data is not an array:', responseData);

          // If responseData is not an array, you may handle this situation accordingly,
          // for example, by setting an empty array as the default data.
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);

        // If an error occurs during the fetch, you may want to handle it accordingly.
        // For simplicity, we set data to an empty array.
        setData([]);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const handleDeactivate = async (userId) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/deactivate_user${userId}`);
      console.log('User deactivated successfully!', response.data);
      // Handle success (if needed)
    } catch (error) {
      console.error('Error deactivating user:', error);
      // Handle error (if needed)
    }
  };
const handleDelete = async (userId) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/delete_user/${userId}`);
    console.log('User deleted successfully!', response.data);
    // Handle success (if needed)
  } catch (error) {
    console.error('Error deleting user:', error);
    // Handle error (if needed)
  }
};


  return (
    <>
    
    <div className="page">
    <TopBar />
    <div className="user-man">
      <p style={{
      color: 'black'
    }}>User Management</p>
      <input type="text" placeholder="search" />
    </div>
    <div className="user-role">
      <p style={{
      color: 'black'
    }}> ums</p>
        <select id="role" name="Role">
            <option value="male" >Admin</option>
            <option value="female">User</option>
        </select>
        <select id="status" name="status">
            <option value="male" >Active</option>
            <option value="female">Inactive</option>
        </select>
      <button>search</button>
    </div>
    <div className="user-top">
      <p style={{
      color: 'black'
    }}>
        User <br /> here is a list of all User
      </p>
      <button>Add User</button>
    </div>

    <table>
      <thead>
  <tr>
  <th>User Name</th>
  <th>email</th>
  <th>Role</th>
  <th>status</th>
  <th>Action</th>
  </tr></thead>
  <tbody>
  {data.map((item) => (
  <tr key={item.id}>
  <td>{item.username}</td>
  <td>{item.email}</td>
  <td>$100</td>
  <td>$100</td>
  <td><a onClick={() => handleDeactivate(item.id)}>Dec</a>
  <a onClick={() => handleDelete(item.id)}>Del</a></td>
  </tr>
  ))}</tbody>
</table>
  </div>
    
    </>
  );
}

export default Naol;
