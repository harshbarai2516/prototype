import React from 'react';
import './Bottomnav.css';
import HomeIcon from '@material-ui/icons/Home';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonIcon from '@material-ui/icons/Person';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { Link } from 'react-router-dom'


class Bottomnav extends React.Component {
    
    render(){
        
        return(
            <div className="bottom">
                <nav className="homeicon">
                <>
                    <li><Link to="/home"><HomeIcon /></Link></li>
                    <li><Link to="/nearby"><NearMeIcon /></Link></li>
                    <li><Link to="/messages"><ChatBubbleOutlineIcon/></Link></li>
                    <li><Link to="/reciepe"><KitchenIcon /></Link></li>
                    <li><Link to="/profile"><PersonIcon /></Link></li> 
                </>        
                        
                </nav>  
            </div>  
        )
    }
}


export default Bottomnav
