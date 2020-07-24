// Packages
import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import Firebase from '../config/Firebase'
import firebase from 'firebase'

const Login = props => {
    const provider = new firebase.auth.GoogleAuthProvider()
    
    const handleLogin = (e) => {
        e.preventDefault()
        Firebase.auth()
            .signInWithPopup(provider)
            .then((data) => {
                props.setUser(data.user)
            })
            .catch(error => console.log(error))
    }

    if(props.user){
        return <Redirect to='/home' />
    }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  )
}

export default Login