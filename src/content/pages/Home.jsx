import React from 'react';
import {Redirect} from 'react-router-dom'

const Home = (props) => {

    if (!props.user) {
        return <Redirect to='/' />
    }

    return(
        <div>
            <h1>Home Stub</h1>
            <p>welcome {props.user.displayName}</p>
            <button onClick={props.handleLogout}>Logout</button>
        </div>
        
    )
}

export default Home