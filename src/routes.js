import React from 'react'
import Layout from './hoc/Layout'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Postmain from './components/Postmain';
import Saveditems from './components/Saveditems';
import Profile from './components/Profile';
import Reciepe from './components/Reciepe';
import Messages from './components/Messages';
import Nearby from './components/Nearby';
import Home from './components/Home';
import Login from './components/Login';

function BaseRouter() {
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/nearby" component={Nearby} />
                        <Route exact path="/messages" component={Messages} />
                        <Route exact path="/reciepe" component={Reciepe} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/saveditems" component={Saveditems} />
                        <Route exact path="/postmain" component={Postmain} />
                    </Switch>
                </Layout>
            </Router>  
        </>
    )
}

export default BaseRouter
