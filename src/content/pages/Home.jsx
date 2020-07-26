import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import Firebase from "../config/Firebase"
import Astronauts from './Astronauts'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import NavDrawer from '../nav/NavDrawer'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

  


const Home = (props) => {
    const [issData, setIssData] = useState()
    const [open, setOpen] = useState(false)
    const trigger = useScrollTrigger();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const getIssData = () => {
            fetch(process.env.REACT_APP_ISS_KEY, { signal: signal })
                .then(response => response.json())
                .then(results => {
                    setIssData(results.iss_position)
            })
                .catch((err) => {
                    console.log('fetch request error', err)
            })
        }
        if (!issData){
            getIssData()
        } else {
            setTimeout(getIssData, 5000)
        }
        return function cleanup() {
            abortController.abort();
          };
    }, [issData])

  

    // Protects the route from unauthorized users
    if (!props.currentUser) {
        return <Redirect to='/' />
    }

    // Leaflet Lat and Long constants
    if (issData) {
        var lat = issData.latitude
        var lng = issData.longitude
    } else {
        var lat = 0
        var lng = 0
    }

    const position = [lat, lng]

   const handleDrawerOpen = () => {
       if(open == false) {
           setOpen(true)
       } else {
           setOpen(false)
       }
   }
    
 
    // customized marker icon for Leaflet
    const myIcon =  L.icon({
        iconUrl: 'https://i.imgur.com/QxRjcbJ.png',
        iconSize: [60, 35],
        popupAnchor: [0, -40]
    })
    
    return(
        <div className="mainBody">
            <Zoom appear={false} direction={"down"} in={!trigger}>
                <div className="welcomeContainer">
                    <h1 className="h1Fixed">Welcome {props.currentUser.displayName}</h1>  
                </div>
            </Zoom>
            <NavDrawer open={open} setOpen={setOpen} />
            
            <div onClick={handleDrawerOpen}>
                <div id="astronautsCon">
                    <Astronauts />
                </div>
            </div>

            <div className="mapCon" id="leafletMap" >
                <Map center={position} zoom={3} className="mapContainer">
                    <TileLayer
                    attribution='copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={position} icon={myIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>

            <button onClick={ () => Firebase.auth().signOut()}>Logout</button>
        </div>
        
    )
}

export default Home