import React from 'react';
import './Profile.css';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import Saveditems from './Saveditems.js';

function Profile() {

  return (
        <div className="profile">
          <div className="image">
              <img className="imagea"  src="https://i.ibb.co/QrW8k5R/homephoto.png" alt=""/>
            <div className="profilebox">
              <p>harsh Barai</p>
              <h3>Points: <p className="points">Dispalyed</p> </h3>
              
              <Router>
                  <Link to="/saveditems">
                    <p>Saveditems</p>
                  </Link>
              </Router>
              
            </div>
          </div>
        </div>
  )
}

export default Profile
