import React from 'react';
import './Post.css';
import Postmain from './Postmain'
import{ BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function Post() {
    return (
        <div>
            <div className="postbox">
                <p className="posttext" >Burger</p>
                <Link to="/postmain">
                <img className="post" src="https://i.ibb.co/QrW8k5R/homephoto.png" alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Post
