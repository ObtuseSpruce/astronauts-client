// Packages
import React from 'react'
import {Redirect} from 'react-router-dom'
import Firebase from '../config/Firebase'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'


const Login = props => {
    //Firebase has several different methods for authorization
    //This app uses google
    const provider = new firebase.auth.GoogleAuthProvider()

    const handleLogin = () => {
        Firebase.auth()
            //Firebase offers several different methods for sign-in
            //This redirects to the provider(google) and then once signed-in
            //redirects back to site
            .signInWithPopup(provider)
            .then(() => {
            })
            .catch(error => console.log('there was a login error', error))
    }

    //if there is an authorized user redirect to /home
    if(props.currentUser){
        return <Redirect to='/home' />
    }

  return (
    <div className="loginContainer">
      <h1>International Space Station Tracker</h1>
      <div className="loginAndSignupCon">
        <Button onClick={handleLogin} className="loginButton">
        <div className="customButton">
          <img src="https://i.imgur.com/DNwWqYR.png" className="googleSignIn" alt="google logo"></img>
          <p>Sign-In with Google</p>
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
