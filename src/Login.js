import { Divider } from '@material-ui/core';
import { render } from '@testing-library/react';
import React,{ Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
   constructor(props){
    super(props)
    this.state={
    isLoggedin: false
   }
  }
  responseFacebook=(response) => {
           console.log(response);
  }
  render(){
    return(
     this.state.isLoggedin? 'Home':
     (<div>
       <FacebookLogin
       appId="352773949167013"
       autoLoad={true}
       fields="name,email,picture"
       callback={this.responseFacebook}/>
    </div>)
  )
}
}

