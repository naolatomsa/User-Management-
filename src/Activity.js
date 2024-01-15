import React from 'react';
// import './adminDashbord.css';
import './Activity.css'

function View() {

  return (
    <div style={{display: 'grid'}}>
    <div className="container2">
    <ul className="responsivetable">
        <li className="tableheader">
        <div className="col1 col-11">Date</div>
        <div className="col2 col-12">Activity</div>
        </li>
        <li className="tablerow">
        <div className="col1 col-11" data-label="Job Id">
            42235
        </div>
        <div className="col2 col-12" data-label="Customer Name">
            John Doe
        </div>
        </li>
    </ul>
    </div>
    </div>
  );
}

export default View;
