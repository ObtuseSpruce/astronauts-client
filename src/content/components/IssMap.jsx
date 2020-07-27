import React, {useEffect, useState} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const IssMap = (props) => {
    const [issData, setIssData] = useState()

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

    if (issData) {
        var lat = issData.latitude
        var lng = issData.longitude
    } else {
        var lat = 0
        var lng = 0
    }

    const position = [lat, lng]

    // customized marker icon for Leaflet
    const myIcon =  L.icon({
        iconUrl: 'https://i.imgur.com/QxRjcbJ.png',
        iconSize: [60, 35],
        popupAnchor: [0, -40]
    })

    return(

        <div className="issMapCon">
            <div className="horizontalLine"  id="issMapCon">
                <hr></hr>
            </div>
            <div className="mapCon">
                <div className="mapInfo">
                    <h1>ISS Current Location</h1>
                    <p>
                        A live map tracking the ISS as it orbits Earth
                    </p>
                </div>
                <Map center={position} zoom={3} className="mapContainer">
                    <TileLayer
                    attribution='copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={position} icon={myIcon}>
                        <Popup>
                            The International Space Station.
                        </Popup>
                    </Marker>
                </Map>
            </div>

            <div className="astronautInfo">
                <blockquote>The ISS travels at 5 miles a second and completes 16 orbits every day.</blockquote>
            </div>

        </div>
    )
}

export default IssMap