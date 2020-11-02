import React from 'react';
import './Bottomnav.css';
import HomeIcon from '@material-ui/icons/Home';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonIcon from '@material-ui/icons/Person';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.js';
import Nearby from './Nearby.js';
import Messages from "./Messages.js"
import Reciepe from './Reciepe.js';
import Profile from './Profile.js';

class Bottomnav extends React.Component {
    
    render(){
        
        return(
        <Router>
             <div className="bottom">
                  <nav className="homeicon">         
                     <Link to="/home"><li><HomeIcon /></li></Link>
                   <Link to="/nearby"><li>< NearMeIcon /></li></Link>
                   <Link to="/messages"><li><ChatBubbleOutlineIcon/></li></Link >
                   <Link to="/reciepe"><li><KitchenIcon /></li></Link>
                   <Link to="/profile"><li><PersonIcon /></li></Link>         
                  </nav>  
             </div>
         </Router>     
        )
    }
}



// function Bottomnav() {
//     return (
//         <Router>
//         <div>
//             <div className="bottom">
//                  <nav className="homeicon">         
//                   <Link to="/home">
//                    <li><HomeIcon /></li>
//                   </Link>
//                   <Link to="/nearby">
//                   <li>< NearMeIcon /></li>
//                   </Link>
//                   <Link to="/messages">
//                   <li><ChatBubbleOutlineIcon/></li>
//                   </Link >
//                   <Link to="/reciepe">
//                   <li><KitchenIcon /></li>
//                   </Link>
//                   <Link to="/profile">
//                   <li><PersonIcon /></li>
//                   </Link>         
//                  </nav>
//             </div>
//         </div>
//         </Router>
//     )
// }

export default Bottomnav
