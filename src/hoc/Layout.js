import React from 'react'
import Bottomnav from '../components/Bottomnav'
import Sidebar from '../components/Sidebar'

function Layout(props) {
    return (
        <div>
            <Sidebar />
               {props.children} 
            <Bottomnav />
        </div>
    )
}

export default Layout
