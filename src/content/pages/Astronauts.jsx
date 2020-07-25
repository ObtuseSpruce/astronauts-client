import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Astronauts = (props) => {
    const [astronauts, setAstronauts] = useState()
    const [data, setData] = useState()

    const getData = () => {
    fetch(process.env.REACT_APP_ASTROS_KEY)
        .then(response => response.json())
        .then(results => {
        console.log(results)
        })
      }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div>Astronauts Stub</div>
    )
}

export default Astronauts