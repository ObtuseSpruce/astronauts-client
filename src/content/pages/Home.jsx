import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import Astronauts from '../components/Astronauts'
import NavDrawer from '../nav/NavDrawer'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IssMap from '../components/IssMap'
import Footer from '../nav/Footer'
  


const Home = (props) => {
    const [open, setOpen] = useState(false)
    const trigger = useScrollTrigger({threshold: "240"});

    // Protects the route from unauthorized users
    if (!props.currentUser) {
        return <Redirect to='/' />
    }
    
    const ShowDisplayName = () => {
        if (props.currentUser.displayName) {
            return (
                <h1 className="h1Fixed">Welcome {props.currentUser.displayName}</h1>  
            )
        } else {
            return (
                <h1 className="h1Fixed">Welcome Friend!</h1>  

            )
        }
    }
    
    return(
        <div className="mainBody">
            <NavDrawer open={open} setOpen={setOpen} />

            <div id="homeTop">
            <Zoom appear={false} direction={"down"} in={!trigger}>
                <div className="welcomeContainer" >
                    <ShowDisplayName />
                    <p>Scroll down to learn more about the International Space Station and it's crew.</p>
                </div>
            </Zoom>
            </div>
            
            <div>
                <Astronauts />
            </div>

            <div>
                <IssMap />
            </div>

            <Footer />

        </div>
        
    )
}

export default Home