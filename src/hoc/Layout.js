import React from 'react'
import Bottomnav from '../components/Bottomnav'
import Test from '../components/Test'

function Layout(props) {
    return (
        <div>
            <Test />
               {props.children} 
            <Bottomnav />
        </div>
    )
}

export default Layout
