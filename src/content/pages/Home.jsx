import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'
import Firebase from "../config/Firebase"
import Astronauts from './Astronauts'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import axios from 'axios'

  


const Home = (props) => {
    const [issData, setIssData] = useState()
    const [lngData, setLngData] = useState(42)
    const [latData, setLatData] = useState(-122)

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const getIssData = () => {

        fetch(process.env.REACT_APP_ISS_KEY, { signal: signal })
        .then(response => response.json())
        .then(results => {
        console.log(results)
        setIssData(results.iss_position)
        setLngData(results.iss_position.longitude)
        setLatData(results.iss_position.latitude)
        })
        .catch((err) => {
            console.log(err)
        })
        }
        setTimeout(getIssData, 5000)
        return function cleanup() {
            abortController.abort();
          };

    }, [issData])

  

    // Protects the route from unauthorized users
    if (!props.currentUser) {
        return <Redirect to='/' />
    }

  

   

    
    // Leaflet Lat and Long constants
    const lat = `${latData}`
    const lng = `${lngData}`
    const position = [lat, lng]
    // customized marker icon for Leaflet
    const myIcon =  L.icon({
        iconUrl: 'https://i.imgur.com/QxRjcbJ.png',
        iconSize: [60, 35],
        popupAnchor: [0, -40]
    })


    return(
        <div>
            <h1>Home Stub</h1>

            <Astronauts />
        <div>
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