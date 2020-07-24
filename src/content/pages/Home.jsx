import React from 'react';
import {Redirect} from 'react-router-dom'
import Firebase from "../config/Firebase"

const Home = (props) => {

    if (!props.currentUser) {
        return <Redirect to='/' />
    } else {
        console.log(props.currentUser)
    }

    return(
        <div>
            <h1>Home Stub</h1>
            <button onClick={ () => Firebase.auth().signOut()}>Logout</button>
        </div>
        
    )
}

export default Home