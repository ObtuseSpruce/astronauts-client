import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Firebase from './config/Firebase'


const Content = (props) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        Firebase.auth().onAuthStateChanged(setCurrentUser)
    }, [])

    return(
        <Router>
            <Route exact path="/" render={
                () => <Login setUser={props.setUser} currentUser={currentUser}/>
            } />
            <Route path="/home" render={
                () => <Home handleLogout={props.handleLogout} currentUser={currentUser} />
            } />
        </Router>
    )
}

export const AuthProvider = React.createContext()
export default Content