import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'


const Content = (props) => {
    return(
        <Router>
            <Route exact path="/" render={
                () => <Login setUser={props.setUser} user={props.user}/>
            } />
            <Route path="/home" render={
                () => <Home handleLogout={props.handleLogout} user={props.user} />
            } />
        </Router>
    )
}

export default Content