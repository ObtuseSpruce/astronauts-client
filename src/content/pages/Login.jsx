// Packages
import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import Firebase from '../config/Firebase'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'


const Login = props => {
    const provider = new firebase.auth.GoogleAuthProvider()
    
    const handleLogin = () => {
        Firebase.auth()
            .signInWithRedirect(provider)
            .then((data) => {
                props.setUser(data.user)
            })
            .catch(error => console.log(error))
    }

    if(props.currentUser){
        return <Redirect to='/home' />
    }

  return (
    <div className="loginContainer">
      <h1>International Space Station Tracker</h1>
      <div className="loginAndSignupCon">
        <Button onClick={handleLogin} className="loginButton">
        <div className="customButton">
          <img src="https://i.imgur.com/DNwWqYR.png" className="googleSignIn"></img>
          <p>Signin with Google</p>
        </div>
        </Button>
      </div>
      <div className="loginAndSignupCon">
        <Button>
          <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target="blank">If you don't have an account sign up here</a>
        </Button>
      </div>
    </div>
  )
}

export default Login
