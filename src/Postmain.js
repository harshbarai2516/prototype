import React,{useState} from 'react'
import './Postmain.css'
import {Link} from 'react-router-dom'


function Postmain() {
const [products] = useState([
    {
        name: 'Pizza',
        image: 'https://i.ibb.co/prGVV5x/download.jpg'
    },
    {
        name: 'Burger',
        image: 'https://i.ibb.co/dkhP6yz/images.jpg',
    },
    {
        name: 'Sandwitch',
        image: 'https://i.ibb.co/dkhP6yz/images.jpg'
    },
    {
        name: 'StreetFood',
        image: 'https://i.ibb.co/prGVV5x/download.jpg'
    },
    {
        name: 'Shakes',
        image: 'https://i.ibb.co/prGVV5x/download.jpg'
    },
    {
        name: 'Chinese',
        image: 'https://i.ibb.co/prGVV5x/download.jpg'
    }

]);
    return (
        <div>
            <h1>Products</h1>
            <Link to="/">
            <div className="poststructure" >
                <div className="postboxa">
                  <h3>East Nagpur</h3> 
                  <img src="https://i.ibb.co/gmQzs09/download-1.jpg" alt=""/>
                </div>
                <div className="postboxa">
                  <h3>West Nagpur</h3> 
                  <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""/>
                </div>
                <div className="postboxa">
                  <h3>North Nagpur</h3> 
                  <img src="https://i.ibb.co/prGVV5x/download.jpg" alt=""/>
                </div>
                <div className="postboxa">
                  <h3>East Nagpur</h3> 
                  <img src="https://i.ibb.co/prGVV5x/download.jpg" alt=""/>
                </div>
             </div>
            </Link>
            <br/>
        </div>
        
        
    )
}
export default Postmain; 