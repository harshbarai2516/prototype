import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from './Home.js';
import Nearby from './Nearby.js';
import Messages from "./Messages.js"
import Reciepe from './Reciepe.js';
import Profile from './Profile.js';
import HomeIcon from '@material-ui/icons/Home';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonIcon from '@material-ui/icons/Person';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Test from "./Test.js";
import "./Bottomnav.css";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Saveditems from './Saveditems.js';
import './Post.css';
import Postmain from './Postmain'

/* Home component */
const Homea = () => (
  <div>
    <h2><Home /></h2>
  </div>
);

/* Category component */
// const Nearbya = () => (
//   <div>
//     <h2><Nearby /></h2>
//   </div>
// );
function Nearbya() {
    return (
        <div>
            <Postmain />
        </div>
    )
}

/* Products component */
const Messagesa = () => (
  <div>
    <h2><Messages /></h2>
  </div>
);
const Reciepea = () => (
    <div>
      <Reciepe />
      {/* <h2>Hello Reciepe here</h2> */}
    </div>
);
function Profilea() {
    return (
          <div className="profile">
            <div className="image">
                <img className="imagea"  src="https://i.ibb.co/QrW8k5R/homephoto.png" alt=""/>
              <div className="profilebox">
                <p>harsh Barai</p>
                <h3>Points: <p className="points">Dispalyed</p> </h3>  
                 <Link to="/saveditems">
                    <p>Saveditems</p>
                 </Link>
              </div>
            </div>
          </div>
    )
}  
const Bottomnava = () => (
    <div className="bottom">
         <nav className="homeicon">         
             <Link to="/home"><li><HomeIcon /></li></Link>
             <Link to="/nearby"><li>< NearMeIcon /></li></Link>
             <Link to="/messages"><li><ChatBubbleOutlineIcon/></li></Link >
             <Link to="/reciepe"><li><KitchenIcon /></li></Link>
             <Link to="/profile"><li><PersonIcon /></li></Link>         
         </nav>  
</div>  
)
function Login(){
    return(
        <Link to ="/home">
        <div className="login">
           <h1>Login here</h1>
        </div>
        </Link>
    )
    // const responseGoogle = (response) => {
    //     console.log(response);
    // }
    // return(
    // <Link to="/home">
    //     <div className="login">
    //        <GoogleLogin
    //        clientId="1019840405205-okrb76hihm0ifsfa3psvmlmnhmujli2p.apps.googleusercontent.com"
    //        buttonText="Login"
    //        onSuccess={responseGoogle}
    //        onFailure={responseGoogle}
    //        isLoggedIn={true}
    //        cookiePolicy={'single_host_origin'}/>
    //     </div>
    // </Link>    
    // )
}


export default function App() {
  return (
    <div>
        <Router>
            <Switch>
            <Route exact path="/">
                 <Login />
             </Route>
             <Route path="/home">
                 <Test />
                 <Homea />
                 <Bottomnava />
             </Route>
             <Route path="/nearby">
                 <Test />
                 <Nearbya />
                 <Bottomnava />
             </Route>
             <Route path="/messages">
                 <Test />
                 <Messagesa />
                 <Bottomnava />
             </Route>
             <Route path="/reciepe">
                 <Test />
                 <Reciepea />
                 <Bottomnava />
             </Route>
             <Route path="/profile">
                 <Test />
                 <Profilea />
                 <Bottomnava />
             </Route>
             <Route path="/saveditems">
                 <Test />
                <Saveditems />
                <Bottomnava />
              </Route>
              <Route path="/postmain">
                <Test />
                <Postmain />
                <Bottomnava />
              </Route>
             </Switch>
        </Router>        
     </div>
  );
}




































































