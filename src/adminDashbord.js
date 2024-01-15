import React from 'react';
import TopBar from './Topbar';
import './adminDashbord.css';

function Naol() {

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
    <div className="container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">User Name</div>
          <div className="col col-2">Email Address</div>
          <div className="col col-3">Status</div>
          <div className="col col-4">Role</div>
          <div className="col col-5">Activity</div>
          <div className="col col-6">action</div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            42235
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3" data-label="Amount">
            $350
          </div>
          <div className="col col-4" data-label="Payment Status">
            Pending
          </div>
          <div className="col col-5" data-label="Amount">
            $350
          </div>
          <div className="col col-6" data-label="Payment Status">
            Pending
          </div>
        </li>
      </ul>
    </div>
  </div>
    
    </>
  );
}

export default Naol;
